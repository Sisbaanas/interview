import { Injectable } from "@angular/core";
import { HttpService } from "./config/HttpService";

@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    constructor(private http: HttpService) { }

    affiliatePage(size: number, page: number, searchTerm: string, status: any) {
        return this.http.get('/customer/affiliation?size=' + size + '&page=' + page + '&label=' + searchTerm + '&status=' + status).pipe();
    }

    transactionPage(size: number, page: number, searchTerm: string) {
        return this.http.get('/customer/transaction?size=' + size + '&page=' + page + '&label=' + searchTerm).pipe();
    }

    getProfile(id: any) {
        return this.http.get('/customer/profile/' + id).pipe();
    }

    getMyProfile() {
        return this.http.get('/customer').pipe();
    }

    editProfile(req:any) {
        return this.http.patch('/customer',req).pipe();
    }


    addClient(req:any) {
        return this.http.post('/customer/affiliate',req).pipe();
    }

    services() {
        return this.http.get('/global/services').pipe();
    }

    sectors() {
        return this.http.get('/global/sectors').pipe();
    }
}
