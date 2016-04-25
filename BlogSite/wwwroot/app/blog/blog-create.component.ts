import {Component} from "angular2/core";
import {BlogService} from "../services/blog.service";


@Component({
    selector: "blog-create",
    templateUrl: "app/blog/blog-create.component.html",
})

export class BlogCreateComponent {
    title: string;
    post: string;
    tags: string;
    postPreview: string;
    allowComments: boolean;
    nsfw: boolean;

    constructor(
        private _blogService: BlogService) {
    }
}