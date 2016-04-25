import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {IBlog} from "../models/blog";
import {BlogService} from "../services/blog.service";

@Component({
    selector: "my-blogs",
    templateUrl: "app/blog/blog-list.component.html"
})

export class BlogListComponent implements OnInit {
    constructor(
        private _blogService: BlogService,
        private _router: Router) { }

    ngOnInit() {
        this.getBlogs();
    }

    title = "Read our Blogs!";
    blogs: IBlog[];
    selectedBlog: IBlog;

    onSelect(blog: IBlog) {
        this.selectedBlog = blog;
    }

    getBlogs() {
        //this._blogService.getBlogs().then(blogs => this.blogs = blogs);
    }

    gotoDetail() {
        this._router.navigate(["BlogDetail", { id: this.selectedBlog.id }]);
    }
}