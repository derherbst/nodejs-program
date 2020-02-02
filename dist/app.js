"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const helpers_1 = require("./helpers/helpers");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/users', users_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFxRDtBQUNyRCw2Q0FBbUM7QUFDbkMsZ0RBQThDO0FBQzlDLDJEQUF3QztBQUN4QywrQ0FBeUM7QUFFekMsb0JBQVMsQ0FBQyxZQUFZLEVBQUU7S0FDbkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFaEQsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZUFBVSxDQUFDLENBQUM7QUFFOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNKLEdBQVUsRUFDVixHQUFZLEVBQ1osR0FBYSxFQUNmLEVBQUU7SUFDQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLENBQUMifQ==