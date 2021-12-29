import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { USERS, OPTIONS } from "../data/options";

@Component({
  selector: "app-header-component",
  template: `
    <nav class="navbar navbar-expand-lg navbar-light ds-header">
      <a class="navbar-brand" href="#">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="2rem"
          height="2rem"
          viewBox="0 0 124 124"
          style="enable-background:new 0 0 124 124;"
          xml:space="preserve"
        >
          <g>
            <path
              d="M121.4,89.5H2.6c-1.4,0-2.6,1.2-2.6,2.6v9.801c0,1.399,1.2,2.6,2.6,2.6h118.8c1.399,0,2.6-1.2,2.6-2.6V92.1
		C124,90.7,122.8,89.5,121.4,89.5z"
            />
            <path
              d="M2.7,77.5h11.9c1.7,0,3.4-1.7,3.4-3.4V56.7c0-1.7,1-3.2,2.7-3.2h13.6c1.7,0,2.8,1.5,2.8,3.2v17.5
		c0,1.7,1.6,3.399,3.3,3.399h12c1.7,0,2.7-1.699,2.7-3.399V22c0-1.7-1-2.5-2.7-2.5h-12c-1.7,0-3.3,0.9-3.3,2.5v14.3
		c0,1.7-1.1,3.2-2.8,3.2H20.7C19,39.5,18,38,18,36.3V22c0-1.7-1.7-2.5-3.4-2.5H2.7C1,19.5,0,20.4,0,22v52.1C0,75.8,1,77.5,2.7,77.5z
		"
            />
            <path
              d="M109.9,50.3c0.899-0.3,1.6-0.7,2.3-1.1c2.399-1.5,4.3-3.4,5.7-5.7c1.399-2.3,2.1-5.1,2.1-8.3c0-3.7-0.9-6.8-2.7-9.4
		c-1.8-2.6-4.2-4.1-7.1-5.1c-2.9-1-7.2-1.2-12.7-1.2H69.1c-0.899,0-2.1,0.2-2.1,1.1v55c0,0.9,1.2,1.9,2.1,1.9H84
		c0.9,0,2.1-1,2.1-1.9V55.1c0-0.9,0.5-1.6,1.301-1.6c1.6,0,3,0.4,4.3,1.3c1,0.7,2,2.2,3.2,4.5l9.1,17.2c0.3,0.5,0.8,1,1.4,1h16.8
		c1.2,0,2-1.4,1.399-2.5c-2.6-5.1-4.899-10.5-8.199-15.3c-1.301-1.9-2.7-4.1-4.4-5.6C109.9,53.2,107.7,51.2,109.9,50.3z M101,39.6
		c-0.9,1.2-2.3,2-3.8,2.4c-3.2,0.9-6.601,0.6-9.9,0.6C86.4,42.6,86,41.9,86,41v-8.7c0-0.9,0.2-1.8,1.1-1.8H93.4
		c2.8,0,5.8,0.2,7.6,2.8C102.3,35.1,102.3,37.8,101,39.6z"
            />
          </g>
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
            <a
              class="nav-link ds-header-tabs"
              style="color: black;"
              routerLink=""
              >{{ options[0].option }} <span class="sr-only">(current)</span></a
            >
          </li>

          <li class="nav-item active">
            <a
              class="nav-link ds-header-tabs"
              style="color: black;"
              routerLink="onboarding"
              >{{ options[1].option }} <span class="sr-only"></span
            ></a>
          </li>

          <li class="nav-item active">
            <a
              class="nav-link ds-header-tabs"
              style="color: black;"
              routerLink="users-api"
              >{{ options[2].option }} <span class="sr-only"></span
            ></a>
          </li>

        </ul>
      </div>
    </nav>
    <app-banner-component></app-banner-component>
  `,
})
export class HeaderComponent {
  constructor() {}

  title: string = "Header component";
  faCoffee = faCoffee;

  options = OPTIONS;
}
