import {Injectable} from "angular2/core";
import {IBlog} from "../models/blog";
import {Http, Response} from "angular2/http";

@Injectable()
export class BlogService {
    public http: Http;
    public static PATH: string = "/api/blogs/";

    constructor(http: Http) {
        this.http = http;
    }

    getBlog(title: string, onNext: (json: any) => void) {
        this.http.get(BlogService.PATH + title).map(
            response => response.json())
            .subscribe(onNext);
    }

    getBlogs(onNext: (json: any) => void) {
        this.http.get(BlogService.PATH).map(
            response => response.json())
            .subscribe(onNext);
    }
}