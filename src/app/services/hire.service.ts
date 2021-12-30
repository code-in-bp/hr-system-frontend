import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";
import { IHire } from "../models/IHire";

@Injectable({
  providedIn: "root",
})
export class HireApiService {
  hires?: IHire[];

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



  getAllHires1(): any {
    this.getAllHires().subscribe(
      data => {
        this.hires = data.slice(0,8);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );


 
    

  }


  hire: IHire;

  searchforSerialNumber(serialnum: string): any {
   /* this.http.get(environment.baseUrl + "/search/" + serialnum).subscribe(
      data => {
        this.hires = [data]
      }
    ) */

      this.getAllHires().subscribe(
        data => {
          this.hires = data.filter(d => d.serialNumber === serialnum)},
        error => {
          console.log(error);
        }
      )
  }
}


