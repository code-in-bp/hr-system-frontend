import { Component } from "@angular/core";


@Component({
    selector: "app-hires-api-component",
    template: `
        <div class="container-flex">
      <div class="row ds-banner-row">
        <div class="col-md-6">
          <h4>All Hires</h4>
        </div>

        <div class="col-md-6">
          <div class="row">
            <div class="col-md-2">

            </div>
            <div class="col-md-4">
              <button [disabled]="true" class=" btn btn-primary" style="width: 100%; border:none; border-radius: 0px;" routerLink="users/add">
                Add New Hire
              </button>
            </div>
            <div class="col-md-6">
            <div style="border: 1px solid #DDD;">
            <input
                type="text"
                class="icon ds-search form-control search-field"
                placeholder="Search"
              />
    
            </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">wefsd</div>
        <div class="col-md-10">
          <table class="table ds-table">
            <thead>
              <tr>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <!-- <th scope="col">Phone</th> -->
                <th scope="col">Birth date</th>
                <!-- <th scope="col">About</th> -->
                <th scope="col">Avatar</th> 
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    `

})
export class HiresListApiComponent {

}