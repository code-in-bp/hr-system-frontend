import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './banner.component';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [ BrowserModule],
  declarations: [
    BreadcrumbComponent,
    BannerComponent
    
  ],
  exports: [BreadcrumbComponent, BannerComponent]
})
export class CommonFolderModule { }
