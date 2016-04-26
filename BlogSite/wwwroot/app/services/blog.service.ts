import {Injectable} from "angular2/core";
import {IBlog} from "../models/blog";
import {Http, Response} from "angular2/http";

@Injectable()
export class BlogService {
    public http: Http;
    public static PATH: string = "/api/blogs";

    constructor(http: Http) {
        this.http = http;
    }

    getBlog(id: number) {
        //return Promise.resolve(BLOGS).then(
        //    blogs => blogs.filter(blog => blog.id === id)[0]
        //);
    }

    get(onNext: (json: any) => void) {
        this.http.get(BlogService.PATH).map(
            response => response.json())
            .subscribe(onNext);
    }
}