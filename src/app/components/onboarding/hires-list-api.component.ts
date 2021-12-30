import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { IHire } from "src/app/models/IHire";
import { HireApiService } from "src/app/services/hire.service";

@Component({
  selector: "app-hires-api-component",
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12"><h1>On Boarding</h1></div>
        
      </div>
  
      <div class="row">
        <div class="col-md-3">
          <!--<button class="btn hr-custom-btn">Add New Hire</button>-->

          <div class="col-md-12 hr-custom-container">
          <app-add-new-hire-modal></app-add-new-hire-modal>

          </div>
          <div class="col-md-12 hr-custom-container2">
          <form>   
            <div class="col-md-12">   
                <div class="form-group">
                <h2>Search</h2>
                  <!-- <label for="serialNumber">Serial Number</label> -->
                  <input 
                  id="serialNumber" 
                  [formControl]="serialNumber" 
                  type="text" 
                  class="form-control"  
                  placeholder="Serial Number">
                </div>
                <button type="button" class="btn hr-search-btn" (click)="search()">Search</button>
            </div>
          </form>

          </div>

        </div>





        <div class="col-md-9 ds-table">
          <div class="card-group">
            <div *ngFor="let h of this.hireService.hires" class="col-md-3">
              <div class=" hr-custom-hire-card">
                <div class="hr-custom-card-body">
                  <div class="">
                    <img class="hr-custom-img" src="/assets/user.png" />
                    <p>SerialNo. {{ h.serialNumber }} <br> Hire Date. {{h.hireDate}}</p>
                    <h4>{{ h.firstName }} - {{ h.lastName }}</h4>
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

  serialNumber = new FormControl('');  
  
  ngOnInit(): void {
    this.hireService.getAllHires1();    
  }


  btnClick = (url: any) => {
    this.router.navigate(["/" + url]);
  };


  search = () => {
    const sn = this.serialNumber.value;
    if(sn === "") {
      this.hireService.getAllHires1();
    } else {
      this.hireService.searchforSerialNumber(sn);
      console.log( this.hireService.searchforSerialNumber(sn));
    } 
  }
}


