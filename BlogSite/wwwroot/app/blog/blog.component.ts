import {Component} from "angular2/core";
import {RouterOutlet, RouteConfig} from "angular2/router";

import {BlogCreateComponent} from "./blog-create.component";
import {BlogListComponent} from "./blog-list.component";
import {BlogDetailComponent} from "./blog-details.component";
import {BlogService} from "../services/blog.service";

@Component({
    template: "<router-outlet></router-outlet>",
    directives: [RouterOutlet],
    providers: [BlogService]
})
@RouteConfig([
    {
        path: "/",
        name: "BlogList",
        component: BlogListComponent
    },
    {
        path: "/create",
        name: "BlogCreate",
        component: BlogCreateComponent
    },
    {
        path: '/:title',
        name: "BlogDetail",
        component: BlogDetailComponent
    }
])
export class BlogComponent {
    // base blog component
}