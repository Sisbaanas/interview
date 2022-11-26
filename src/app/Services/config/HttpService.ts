import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
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

  uploadFile(endPoint: string, formData: FormData): Observable<any> {
    return this.http
      .post(this.apiBaseServer + endPoint, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
