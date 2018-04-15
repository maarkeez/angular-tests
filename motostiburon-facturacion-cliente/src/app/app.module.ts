import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

//Custom Components / Modules
import { AppComponent } from './app.component';

//Axecredit
import { AdminModule } from "./admin/admin.module";
import { AdminComponent } from "./admin/admin.component";
import { AdminDeliveryComponent } from "./admin/delivery/admin.delivery.component";

// Time picker
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need


@NgModule({
    declarations: [
        AppComponent],
    imports: [
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot([
            { path: "admin", component: AdminComponent },
            { path: "admin/delivery", component: AdminDeliveryComponent },
            { path: "**", redirectTo: "/" }
        ]),
        AdminModule,
        AmazingTimePickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
