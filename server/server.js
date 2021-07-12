"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, "../static")));
// set the view engine to ejs
app.set("views", path_1.default.join(__dirname, "../view"));
app.set("view engine", "ejs");
const port = 3000;
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
