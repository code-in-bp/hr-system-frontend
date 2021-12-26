import { Component } from "@angular/core";

@Component({
  selector: "app-breadcrumb-component",
  template: `
    <div class="container-flex">
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Users</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  `,
})
export class BreadcrumbComponent {}
