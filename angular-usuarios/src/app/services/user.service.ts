import{Injectable, inject} from '@angular/core';
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

    /* prepara una peticion HTTP tipo GET
    User[] esperamos recibir arreglo de usuarios */

    getUsers(){
        return this.http.get<User[]>(this.url);
    }
}

