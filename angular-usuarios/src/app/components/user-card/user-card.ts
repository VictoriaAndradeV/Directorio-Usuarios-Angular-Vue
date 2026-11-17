/* El componente UserCard no administrará la lista de favoritos. 
Esa responsabilidad será del componente principal, que recibirá el evento 
y actualizará el estado. */

import { Component, input, output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  imports:[],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  //Datos recibidos desde el componente principal
  user = input.required<User>();
  isFavorite = input(false);
  //evento que avisa cuando se pulsa un btn
  favoriteToggled=output<number>();

  //funcion se ejecuta al presionar el btn
  //obtiene id del usuario
  toggleFavorite() {
    this.favoriteToggled.emit(this.user().id);
  }
}
