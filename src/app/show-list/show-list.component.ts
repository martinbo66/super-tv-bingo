import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Show } from '../show.interface';

@Component({
    selector: 'show-list',
    templateUrl: 'show-list.component.html',
    styleUrls: ['show-list.component.scss'],
})
export class ShowListComponent implements OnInit, OnDestroy {
    shows: Show[];

    constructor(private apiService: ApiService) {
        this.shows = apiService.getShows();
    }


    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
