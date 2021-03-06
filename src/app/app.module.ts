import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {CoreModule} from './core/core.module';
import {AppLayoutModule} from './views/app-layout/app-layout.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './core/services/api.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        AppLayoutModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
