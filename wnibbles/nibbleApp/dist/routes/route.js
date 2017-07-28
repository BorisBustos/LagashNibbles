"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRoute {
    constructor() {
        this.title = "Tour of Heros";
        this.scripts = [];
    }
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
    json(req, res, body, options) {
        res.locals.BASE_URL = "/";
        res.header("Access-Control-Allow-Origin", "*");
        res.json(body);
    }
}
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=route.js.map