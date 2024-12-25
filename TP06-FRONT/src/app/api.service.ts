import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produit } from "./models/produit";
import { User } from "./models/user";
import { environment } from "../environments/environments";

@Injectable()
export class ApiService{
    constructor (private http: HttpClient) {}
    
    public getProduits(): Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
    }

    // Authentification
    public register(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.backendUser}/auth/register`, { username, password });
    }

    public login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.backendUser}/auth/login`, { username, password });
    }

    public updateUser(userData: any, token: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.put(`${environment.backendUser}/auth/user`, userData, { headers });
    }

    public deleteUser(token: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.delete(`${environment.backendUser}/auth/user`, { headers });
      }
}
