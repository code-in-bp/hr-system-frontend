import { Component } from "@angular/core";
import {footerData} from '../data/footer';

@Component({
  selector: "app-footer-component",
  template: `
    <footer class="custom-footer">
        <div class="row">

        <div class="col-md-2">
           <!-- <p class="custom-p">Last update : {{date}}</p>  -->

            </div>


            <div class="col-md-8">
             <p class="custom-p">{{title}} : {{date}}</p>

            </div>

            <div class="col-md-2">
            <!-- <img class="custom-img" src="/assets/logo.svg" /> -->

            </div>


        </div>
    </footer>
  `,
})
export class FooterComponent {
  title: string = footerData.title;
  date: string = footerData.date;
}
