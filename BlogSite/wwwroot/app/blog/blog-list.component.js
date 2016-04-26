System.register(["angular2/core", "angular2/router", "../services/blog.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blog_service_1;
    var BlogListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            BlogListComponent = (function () {
                function BlogListComponent(_blogService, _router, _routeParams) {
                    this._blogService = _blogService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.isLoading = false;
                }
                BlogListComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                BlogListComponent.prototype.get = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._blogService.get(function (json) {
                        if (json) {
                            _this.blogs = json.blogs;
                            _this.isLoading = false;
                        }
                    });
                };
                BlogListComponent.prototype.onSelect = function (blog) {
                    this.selectedBlog = blog;
                };
                BlogListComponent.prototype.gotoDetail = function () {
                    this._router.navigate(["BlogDetail", { id: this.selectedBlog.BlogID }]);
                };
                BlogListComponent = __decorate([
                    core_1.Component({
                        selector: "my-blogs",
                        templateUrl: "app/blog/blog-list.component.html"
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.Router, router_1.RouteParams])
                ], BlogListComponent);
                return BlogListComponent;
            }());
            exports_1("BlogListComponent", BlogListComponent);
        }
    }
});
//# sourceMappingURL=blog-list.component.js.map