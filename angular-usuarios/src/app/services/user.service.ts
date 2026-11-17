import{Injectable, inject, signal} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{User} from '../models/user.model';

/* declaracion del servicio
indica que el servicio esta disponible en toda la app */


/* Con inject(HttpClient) obtenemos el cliente HTTP.
url almacena la direccion desde la q consultamos los usuarios */

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private http = inject(HttpClient);
    private url= 'https://jsonplaceholder.typicode.com/users';

    users = signal<User[]>([]);
    favorites = signal<number[]>([]);
    loading = signal(false);
    error = signal('');

    loadUsers(){
        if(this.users().length > 0 || this.loading()) return;

        this.loading.set(true);
        this.error.set('');

        this.http.get<User[]>(this.url).subscribe({
            next: (data) => {
                this.users.set(data);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('No se pudieron cargar los usuarios.');
                this.loading.set(false);
            }
        });
    }

    toggleFavorite(userId: number) {
        this.favorites.update(current =>
        current.includes(userId)
            ? current.filter(id => id !== userId)
            : [...current, userId]
        );
    }

    isFavorite(userId: number) {
        return this.favorites().includes(userId);
    }
}

