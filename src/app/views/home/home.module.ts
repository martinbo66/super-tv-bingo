import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { ShowListComponent } from '../../show-list/show-list.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    providers: [],
    declarations: [
        HomeComponent,
        ShowListComponent
    ],
    exports: []
})
export class HomeModule {

}
