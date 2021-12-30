import { Component } from "@angular/core";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
                <label for="serialNumber">Serial Number</label>
                <input type="text" class="form-control" id="serialNumber" placeholder="ex. HR12345">
              </div>

              <div class="form-group">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
              </div>
              <div class="form-group">
                <label for="managerEmail">Manager email</label>
                <input type="email" class="form-control" id="managerEmail" placeholder="Manager Email">
              </div>

              <div class="form-group">
                <label for="contractType">Contract Type</label>
                <input type="text" class="form-control" id="contractType" placeholder="ex. FULLTIME">
              </div>

              <div class="form-group">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" placeholder="ex. Hungary">
              </div>

              </div>

              <div class="col-md-6">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
              </div>
              <div class="form-group">
                <label for="managerName">Manager Name</label>
                <input type="text" class="form-control" id="managerName" placeholder="Manager Name">
              </div>

              <div class="form-group">
                <label for="emailAddress">Email Address</label>
                <input type="email" class="form-control" id="emailAddress" placeholder="ex. abc@abc.com">
              </div>

              <div class="form-group">
                <label for="hireDate">Hire Date</label>
                <input type="text" class="form-control" id="hireDate" placeholder="ex. MM-DD-YYY">
              </div>

              <div class="form-group">
                <label for="companyCode">Company Code</label>
                <input type="text" class="form-control" id="companyCode" placeholder="ex. ABC">
              </div>
              

              </div>

              </div>
              
            
            
            </div>
            <div class="modal-footer">
                <button type="button"  class="btn btn-outline-dark" (click)="modal.dismiss('Cross click')">Cancel</button>
                <button type="submit" class="btn btn-outline-dark" (click)="this.save()">Add</button>

            </div>
            </form>
        </ng-template>
    
    
    
    `
})
export class AddNewHireModalComponent {


    closeResult: string = '';

  

    constructor(private modalService: NgbModal) {}
  
      
  
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



     save(): void {
      console.log("save clicked");

      alert("asd");
    }

}