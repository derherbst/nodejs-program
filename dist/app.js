"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const pino_1 = __importDefault(require("pino"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const groups_1 = __importDefault(require("./routes/groups"));
const helpers_1 = require("./helpers/helpers");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
console.log(process.env.LOG_LEVEL);
exports.logger = pino_1.default({
    name: 'user-app',
});
app.use(body_parser_1.json());
app.use(express_pino_logger_1.default({
    logger: exports.logger,
}));
app.use('/users', users_1.default);
app.use('/groups', groups_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFnQztBQUNoQyxlQUFNLEVBQUUsQ0FBQztBQUNULHNEQUFxRDtBQUNyRCw2Q0FBbUM7QUFDbkMsZ0RBQXdCO0FBQ3hCLDhFQUFvRDtBQUNwRCxnREFBOEM7QUFDOUMsMkRBQXdDO0FBQ3hDLDZEQUEwQztBQUMxQywrQ0FBeUM7QUFFekMsb0JBQVMsQ0FBQyxZQUFZLEVBQUU7S0FDbkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFaEQsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV0QixRQUFBLE1BQU0sR0FBRyxjQUFJLENBQUM7SUFDdkIsSUFBSSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUFpQixDQUFDO0lBQ3RCLE1BQU0sRUFBTixjQUFNO0NBQ1QsQ0FBQyxDQUFDLENBQUM7QUFFSixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFVLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBVyxDQUFDLENBQUM7QUFFaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNKLEdBQVUsRUFDVixHQUFZLEVBQ1osR0FBYSxFQUNmLEVBQUU7SUFDQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLENBQUMifQ==