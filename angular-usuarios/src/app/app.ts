import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { UserService } from './services/user.service';
import {User} from './models/user.model';
import {UserCard} from './components/user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [UserCard],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  private userService = inject(UserService);

  //datos y estado de la api
  users = signal<User[]>([]);
  loading = signal(true);
  error= signal('');

  //BUSCAR USUARIOS
  searchText=signal('');

  filteredUsers=computed(() =>
    this.users().filter(user =>
      user.name.toLowerCase().includes(
        this.searchText().trim().toLowerCase()
      )
    )
  );

  //FAVORITOS
  favorites=signal<number[]>([]);

  //cargamos los usuarios al iniciar la app
  ngOnInit(){
    this.userService.getUsers().subscribe({
      next:(data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los usuarios');
        this.loading.set(false);
      }
    });
  }

  //agregar o quitar un usuario de FAVORITOS
  toggleFavorite(userId: number){
    this.favorites.update(current =>
      current.includes(userId) ? current.filter(id => id!== userId)
        : [...current, userId]
    );
  }

  //comprobacionde que un USUARIO es FAVORITO
  isFavorite(userId: number){
    return this.favorites().includes(userId);
  }
}
