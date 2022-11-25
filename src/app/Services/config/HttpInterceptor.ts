import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jwtToken = localStorage.getItem("Authorization");

    if(!req.url.endsWith("set/password"))
    {
      const modifiedReq = req.clone({
        setHeaders: {
          'Authorization': String(jwtToken)
        },
      })
      return next.handle(modifiedReq);
    }
    else
    {
      return next.handle(req);
    }


  }
}
