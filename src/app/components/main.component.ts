import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-main-component",
  template: `
    <div class="container hr-card-container">
      <div class="row hr-custom-p-margin">
        <h1>Welcome to HR System</h1>
      </div>
      <div class="row"></div>
      <div class="card-group">
        <div *ngFor="let t of cardTitles" class="col-md-4">
          <div (click)="btnClick(t.url);"  class="card hr-custom-card mb-3" style="max-width: 30rem; height: 10rem;">
            <div class="card-body">
              <div class="hr-custom-margin" >
              <h5>{{t.title}}</h5>
            <!--  <h5>{{t.title}}</h5> -->


              </div>
            </div>
          </div>
        </div>
      </div>
  `,
})
export class MainComponent {

  constructor(private router: Router) {
    
  }

     cardTitles = [
         { title: "Recruitment", url: "hires"},
         { title: "Attendance", url: "attendance"},
         { title: "Performance", url: "performance"},
         { title:"Travel", url: "travel"},
         { title: "Reports", url: "reports"},
         { title: "Payroll", url: "payroll"}
    ];


    btnClick= (url: any) => {
      this.router.navigate(['/'+url]);
};


}
