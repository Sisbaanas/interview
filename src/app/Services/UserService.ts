import { Injectable } from "@angular/core";
import { HttpService } from "./config/HttpService";

@Injectable({
    providedIn: 'root',
})
export class UserService {


    constructor(private http: HttpService) { }

    getChart() {
        return this.http.get('/user/chart/testObject').pipe();
    }
}
