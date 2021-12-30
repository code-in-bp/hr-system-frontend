import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IHire } from "src/app/models/IHire";
import { HireApiService } from "src/app/services/hire.service";

@Component({
    selector: "app-add-new-hire-modal",
    template: `

        <button class="btn hr-custom-btn" (click)="open(mymodal)">Add New Hire</button>

        <ng-template #mymodal let-modal>
        <form>

            <div class="modal-header">
                <h4 class="modal-title" id="modal-basic-title">Add New Hire</h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
              <div class="row">
              <div class="col-md-6">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-5">
                    <label for="serialNumber">Serial Number</label>
                  </div>
                  <div class="col-md-7">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="serialNumber" 
                    placeholder="ex. HR12345"
                    [(ngModel)]="hire.serialNumber"
                    name="serialNumber"
                    >
                  </div>

                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col-md-5">
                  <label for="lastName">Last name</label>
                  </div>
                  <div class="col-md-7">
                  <input 
                  type="text" 
                  class="form-control" 
                  id="lastName" 
                  placeholder="Last Name"
                  [(ngModel)]="hire.lastName"
                  name="lastName"
                  >
                  </div>
                </div>

                
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-5">
                  <label for="managerEmail">Manager email</label>

                  </div>
                  <div class="col-md-7">
                  <input 
                  type="email" 
                  class="form-control" 
                  id="managerEmail" 
                  placeholder="Manager Email"
                  [(ngModel)]="hire.managerEmail"
                  name="managerEmail"
                  
                  >
                  </div>
                </div>

               
              </div>

              <div class="form-group">


                <div class="row">
                  <div class="col-md-5">
                  <label for="contractType">Contract Type</label>

                  </div>
                  <div class="col-md-7">
                  <input 
                  type="text" 
                  class="form-control" 
                  id="contractType" 
                  placeholder="ex. FULLTIME"
                  [(ngModel)]="hire.contractType"
                  name="contryactType"
                  
                  >
                  </div>
                </div>

                
              </div>

              <div class="form-group">

                <div class="row">
                  <div class="col-md-5">
                  <label for="country">Country</label>

                  </div>
                  <div class="col-md-7">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="country" 
                    placeholder="ex. Hungary"
                    [(ngModel)]="hire.country"
                    name="country"
                    >
                  </div>
                </div>
              </div>

              </div>

              <div class="col-md-6">
              <div class="form-group">

                <div class="row">
                  <div class="col-md-5">
                    <label for="firstName">First Name</label>

                  </div>
                  <div class="col-md-7">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="firstName" 
                    placeholder="First Name"
                    [(ngModel)]="hire.firstName"
                    name="firstName"
                    >
                  </div>
                </div>

               
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-5">
                    <label for="managerName">Manager Name</label>
                  </div>
                  <div class="col-md-7">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="managerName" 
                    placeholder="Manager Name"
                    [(ngModel)]="hire.managerName"
                    name="managerName"
                    
                    >
                  </div>
                </div>

                
                
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col-md-5">
                    <label for="emailAddress">Email Address</label>
                  </div>
                  <div class="col-md-7">
                    <input 
                    type="email" 
                    class="form-control" 
                    id="emailAddress" 
                    placeholder="ex. abc@abc.com"
                    [(ngModel)]="hire.email"
                    name="email"
                    
                    >
                  </div>
                </div>
              </div>

              <div class="form-group">

                <div class="row">
                  <div class="col-md-5">
                    <label for="hireDate">Hire Date</label>
                  </div>
                  <div class="col-md-7">
                  <input 
                  type="text" 
                  class="form-control" 
                  id="hireDate" 
                  placeholder="ex. MM-DD-YYY"
                  [(ngModel)]="hire.hireDate"
                  name="hireDate"
                  >
                  </div>
                </div>                
              </div>

              <div class="form-group">

                <div class="row">
                  <div class="col-md-5">
                  <label for="companyCode">Company Code</label>

                  </div>
                  <div class="col-md-7">
                  <input 
                  type="text" 
                  class="form-control" 
                  id="companyCode" 
                  placeholder="ex. ABC"
                  [(ngModel)]="hire.companyCode"
                  name="companyCode"
                  >

                  </div>
                </div>

                
              </div>
              
              </div>

              </div>
              
            
            
            </div>
            <div class="modal-footer">
                <button type="button"  class="btn btn-outline-dark" (click)="modal.dismiss('Cross click')">Cancel</button>
                <button type="submit" class="btn btn-outline-dark" (click)="save(); modal.dismiss('Cross click')">Add</button>

            </div>
            </form>
        </ng-template>
    
    
    
    `
})
export class AddNewHireModalComponent {

    closeResult: string = '';
    hire: IHire = {
      serialNumber: '',
      firstName: '',
      lastName: '',
      managerEmail:'',
      country: '',
      managerName: '',
      companyCode: '',
      email: '',
      hireDate: '',
      contractType: '',
      photo: ''
    }

  

    constructor(private modalService: NgbModal, private hireService: HireApiService, private router: Router) {}

  
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }



     save() {
      const data = {
        serialNumber: this.hire.serialNumber,
        firstName: this.hire.firstName,
        lastName: this.hire.lastName,
        managerEmail:this.hire.managerEmail,
        country: this.hire.country,
        managerName: this.hire.managerName,
        companyCode: this.hire.companyCode,
        email: this.hire.email,
        hireDate: this.hire.hireDate,
        contractType: this.hire.contractType,
        photo: this.hire.photo
      }

      this.hireService.createHire(data)
        .subscribe(
          res => {
           // this.router.navigate(['/', 'onboarding']);

            console.log(res);
          },
          error => {
            console.log(error);
          }
        )
        this.router.navigate(['/onboarding']);
        

    }

}