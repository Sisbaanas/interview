import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "./config/HttpService";

@Injectable({
    providedIn: 'root',
})
export class UserService {




    constructor(private http: HttpService) { }


    Page(size: number, page: number, searchTerm: string) {
        return this.http.get('/user/table/testObject?size=' + size + '&page=' + page + '&label=' + searchTerm).pipe();
    }

    getChart() {
        return this.http.get('/user/chart/testObject').pipe();
    }

    deleteElem(e: any) {
        return this.http.delete('/user/testObject/' + e).pipe();
    }

    updateElem(id: string, req: any) {
        return this.http.patch('/user/testObject/' + id, req).pipe();
    }



    public uploadFile(file: File) {
        const formData = new FormData()
        formData.append('file', file)
        return this.http.uploadFile('/user/upload', formData);
    }

}
