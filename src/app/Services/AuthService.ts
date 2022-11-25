import { Injectable } from "@angular/core";
import { HttpService } from "./config/HttpService";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpService) { }

    Login(data: any) {
        return this.http.post('/auth', data).pipe();
    }

    signup(req: any) {
        return this.http.post('/auth/signup', req).pipe();
    }
}
