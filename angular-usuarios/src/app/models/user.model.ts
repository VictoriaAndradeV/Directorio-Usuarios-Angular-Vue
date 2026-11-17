/* definimos como debe estar organizado el modelo de Usuario */
export interface User{
    id: number;
    name: string;
    email: string;
    address:{city: string};
}