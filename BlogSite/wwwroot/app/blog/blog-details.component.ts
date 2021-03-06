﻿import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {IBlog} from "../models/blog";
import {BlogService} from "../services/blog.service";

@Component({
    selector: "my-blog-detail",
    templateUrl: "app/blog/blog-details.component.html"
})

export class BlogDetailComponent implements OnInit {
    blog: IBlog;
    isLoading: boolean = false;

    constructor(
        private _blogService: BlogService,
        private _routeParams: RouteParams,
        private _router: Router) { }

    ngOnInit() {
        this.get();
    }

    get() {
        this.isLoading = true;
        let title: string = this._routeParams.get("title");
        this._blogService.getBlog(title, json => {
            if (json) {
                this.convertDateTimeToDate(json);
                this.isLoading = false;
            }
        });
    }

    convertDateTimeToDate(json) {
        var blog: IBlog = json;
        blog.CreateDate = new Date(blog.CreateDate);

        this.blog = blog;
    }

    goBack() {
        window.history.back();
    }

    edit(id: number) {
        this._router.navigate(["BlogEdit", { id: id }]);
    }
}