import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IHire } from "src/app/models/IHire";
import { HireApiService } from "src/app/services/hire.service";

@Component({
  selector: "app-hires-api-component",
  template: `
    <div class="container">
      <div class="row">
      <div class="col-md-12 ds-table">
          <button class="btn hr-custom-btn">Add New Hire</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 ds-table">
          <div class="card-group">
            <div *ngFor="let h of this.hireService.hires" class="col-md-4">
              <div (click)="btnClick('')" class=" hr-custom-hire-card">
                <div class="hr-custom-card-body">
                  <div class="">
                    <img class="hr-custom-img" src="" />
                    <p>SerialNo. {{ h.serialNumber }}</p>

                    <h5>{{ h.firstName }} - {{ h.lastName }}</h5>
                    <button class="btn hr-custom-hire-btn">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HiresListApiComponent implements OnInit{
  constructor(private router: Router, public hireService: HireApiService) {}
  hires = this.hireService.hires;
  
  
  ngOnInit(): void {
    this.hireService.getAllHires1();
  }


  btnClick = (url: any) => {
    this.router.navigate(["/" + url]);
  };

 /* hires = [
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      firstName: "fName1",
      lastName: "lName1",
      serialNumber: "HR12345",
      photoUrl: "https://randomuser.me/api/portraits/women/72.jpg",
    },
  ].slice(0, 9); */
}
function getAllHires() {
  throw new Error("Function not implemented.");
}

