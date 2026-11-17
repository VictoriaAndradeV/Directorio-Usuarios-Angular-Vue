import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserCard } from '../../components/user-card/user-card';

@Component({
  imports: [UserCard],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit{
  userService = inject(UserService);
  private route = inject(ActivatedRoute);

  showFavorites = this.route.snapshot.data['favorites'] === true;
  searchText = signal('');

  filteredUsers = computed(() =>
    this.userService.users().filter(user =>
      (!this.showFavorites || this.userService.isFavorite(user.id)) &&
      user.name.toLowerCase().includes(
        this.searchText().trim().toLowerCase()
      )
    )
  );

  ngOnInit() {
    this.userService.loadUsers();
  }
}
