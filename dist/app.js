"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const users_1 = __importDefault(require("./routes/users"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/users', users_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3004);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFtRTtBQUNuRSw2Q0FBbUM7QUFFbkMsMkRBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVUsQ0FBQyxDQUFBO0FBRTdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDSixHQUFVLEVBQ1YsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQixFQUNwQixFQUFFO0lBQ0EsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7QUFDaEQsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=