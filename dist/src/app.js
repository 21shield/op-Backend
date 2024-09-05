"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const imageRoutes_1 = __importDefault(require("../routes/imageRoutes"));
app.get("/", (req, res) => {
    // I probably want this to send back the information needed for images
    res.send("Hello World! this backend is working");
});
const a;
app.use("/images", imageRoutes_1.default);
// the place where the server is listening for when the server starts
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map