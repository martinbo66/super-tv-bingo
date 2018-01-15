import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ShowListComponent } from '../../show-list/show-list.component';
@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(private api: ApiService) {

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
