import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";
import { IHire } from "../models/IHire";

@Injectable({
  providedIn: "root",
})
export class HireApiService {
  constructor(private http: HttpClient) {
    console.log("BaseURL -> " + environment.baseUrl);
  }

  getAllHires(): Observable<IHire[]> {
    return this.http.get<IHire[]>(environment.baseUrl);
  }

  getHire(id: any): Observable<IHire> {
    return this.http.get(environment.baseUrl + id);
  }

  createHire(data: any): Observable<any> {
    return this.http.post(environment.baseUrl, data);
  }

  updateHire(id: any, data: any): Observable<any> {
    return this.http.put(environment.baseUrl + id, data);
  }

  deleteHire(id: any): Observable<any> {
    return this.http.delete(environment.baseUrl + id);
  }
}
