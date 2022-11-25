import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private apiBaseServer = environment.apiBaseServer;

  public get(endPoint: string) {
    return this.http.get(this.apiBaseServer + endPoint);
  }

  public post(endPoint: string, body: any) {
    return this.http.post(this.apiBaseServer + endPoint, body);
  }

  public postWithToken(endPoint: string, body: any,token:string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    console.log(token);

    return this.http.post(this.apiBaseServer + endPoint, body , { headers });
  }

  public postFile(endPoint: string, body: any,options:any) {
    return this.http.post(this.apiBaseServer + endPoint, body,options);
  }

  public patch(endPoint: string, body: any) {
    return this.http.patch(this.apiBaseServer + endPoint, body);
  }

  public put(endPoint: string, body: any) {
    return this.http.put(this.apiBaseServer + endPoint, body);
  }

  public delete(endPoint: string) {
    return this.http.delete(this.apiBaseServer + endPoint);
  }
}
