import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from "./app.component";
import {PLATFORM_DIRECTIVES, provide} from "angular2/core";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,

    provide(PLATFORM_DIRECTIVES, {
        useValue: [ROUTER_DIRECTIVES], multi: true
    })
]);