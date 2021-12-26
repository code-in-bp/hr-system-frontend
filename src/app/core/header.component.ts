import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { USERS, OPTIONS } from "../data/options";

@Component({
  selector: "app-header-component",
  template: `
    <nav class="navbar navbar-expand-lg navbar-light ds-header">
      <a class="navbar-brand" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="laptop-code"
          class="svg-inline--fa fa-laptop-code fa-w-20"
          role="img"
          viewBox="0 0 640 512"
        >
          <path
            fill="white"
            d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
          ></path>
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link ds-header-tabs" style="color: white;" routerLink=""
              >{{options[0].option}} <span class="sr-only">(current)</span></a
            >
          </li>

          <li class="nav-item active">
            <a class="nav-link ds-header-tabs" style="color: white;" routerLink="users-api"
              >{{options[1].option}} <span class="sr-only"></span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  constructor() {}

  title: string = "Header component";
  faCoffee = faCoffee;

  options = OPTIONS;
}
