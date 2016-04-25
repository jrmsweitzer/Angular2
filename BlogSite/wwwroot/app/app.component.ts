﻿import {Component} from "angular2/core";
import {RouteConfig, ROUTER_PROVIDERS} from "angular2/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogService} from "./services/blog.service";

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    providers: [
        ROUTER_PROVIDERS,
        BlogService]
})

@RouteConfig([
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: "/blog/...",
        name: "Blog",
        component: BlogComponent
    }
])

export class AppComponent {
    title = "Welcome";
}