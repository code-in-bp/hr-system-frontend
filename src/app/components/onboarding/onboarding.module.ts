import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddNewHireModalComponent } from "./modal/add-new-hire-modal.component";
import { HiresListApiComponent } from "./hires-list-api.component";


@NgModule({
    imports: [BrowserModule],
    declarations:[HiresListApiComponent, AddNewHireModalComponent],
    exports: [HiresListApiComponent, AddNewHireModalComponent]

})
export class OnboardingModule {

}