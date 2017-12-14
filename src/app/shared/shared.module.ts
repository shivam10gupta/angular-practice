import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ResourceService } from "./services/resource.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [

    ],
    exports: [
    ],
    providers: [
        ResourceService
    ]
})

export class SharedModule { }