import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";


import { AdminComponent } from "./admin.component";
import { AdminDeliveryComponent } from "./delivery/admin.delivery.component";
import { CardComponent } from "../utils/card/card.component";
import { ScheduleComponent } from "../utils/schedule/schedule.component";
import { TableComponent } from "../utils/table/table.component";
import { TableFilter} from '../utils/table/table.filter';

import { AmazingTimePickerModule } from 'amazing-time-picker';




@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, AmazingTimePickerModule],
    exports: [AdminComponent, AdminDeliveryComponent],
    declarations: [TableFilter, AdminComponent, AdminDeliveryComponent, CardComponent, ScheduleComponent, TableComponent],
    providers: []
})
export class AdminModule { }