import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddNewHireModalComponent } from "./modal/add-new-hire-modal.component";
import { HiresListApiComponent } from "./hires-list-api.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    declarations:[HiresListApiComponent, AddNewHireModalComponent],
    exports: [HiresListApiComponent, AddNewHireModalComponent]

})
export class OnboardingModule {

}