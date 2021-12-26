import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HiresListApiComponent } from "./hires-list-api.component";


@NgModule({
    imports: [BrowserModule],
    declarations:[HiresListApiComponent],
    exports: [HiresListApiComponent]

})
export class OnboardingModule {

}