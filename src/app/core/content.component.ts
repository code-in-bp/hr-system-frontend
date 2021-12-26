import { Component } from "@angular/core";


@Component({
    selector: 'app-content-component',
    template: `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <!-- components here  -->
                <!-- <app-users-lists-component></app-users-lists-component> -->
                <!-- <app-breadcrumb-component></app-breadcrumb-component> -->
                <router-outlet></router-outlet>

            </div>
        </div>



    </div>
    
    `
})
export class ContentComponent {

    title: string = "contents component";

}