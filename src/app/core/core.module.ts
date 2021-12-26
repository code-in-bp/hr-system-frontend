import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonFolderModule } from '../common/common.module';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ CommonModule, AppRoutingModule, CommonFolderModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent    
    
  ],
  exports: [HeaderComponent,FooterComponent, ContentComponent]
})
export class CoreModule { }
