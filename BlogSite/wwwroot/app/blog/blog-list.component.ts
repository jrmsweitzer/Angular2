import {Component, OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";
import {IBlog} from "../models/blog";
import {BlogService} from "../services/blog.service";
import {Http, Response} from "angular2/http";

@Component({
    selector: "my-blogs",
    templateUrl: "app/blog/blog-list.component.html"
})

export class BlogListComponent implements OnInit {
    public blogs: IBlog[];
    public selectedBlog: IBlog;
    public selectedId: number;
    isLoading: boolean = false;

    constructor(
        private _blogService: BlogService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.isLoading = true;
        this._blogService.getBlogs(json => {
            if (json) {
                this.blogs = json.blogs;
                this.isLoading = false;
            }
        });
    }


    onSelect(blog: IBlog) {
        this.selectedBlog = blog;
    }

    gotoDetail() {
        this._router.navigate(["BlogDetail", { id: this.selectedBlog.BlogID }]);
    }
}