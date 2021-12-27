import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "app-hires-api-component",
    template: `
     
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 ds-table">
          <button class="btn hr-custom-btn">Add New</button>
        </div>
        
        <div class="col-md-9 ds-table">
        
      <div class="card-group">
        <div *ngFor="let h of hires" class="col-md-4">
          <div (click)="btnClick('');" class=" hr-custom-hire-card">
            <div class="hr-custom-card-body">
              <div class="" >
              <img class="hr-custom-img" src={{h.photoUrl}}/>
              <h5>{{h.firstName}} - {{h.lastName}}</h5>
                <p>{{h.serialNumber}}</p> 
                <button class="btn hr-custom-hire-btn">View</button>

              </div>
            </div>
      </div>  


        </div>
      </div>
    </div>
    `

})
export class HiresListApiComponent {
  constructor(private router: Router) {

  }

  btnClick= (url: any) => {
    this.router.navigate(['/'+url]);
};


hires = [
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/43.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/60.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/men/52.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/men/88.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"},
  { firstName: "fName1", lastName: "lName1", serialNumber: "HR12345", photoUrl: "https://randomuser.me/api/portraits/women/72.jpg"}

].slice(0,9);

}