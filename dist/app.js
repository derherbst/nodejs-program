"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const groups_1 = __importDefault(require("./routes/groups"));
const helpers_1 = require("./helpers/helpers");
const logger_1 = require("./logger/logger");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.json());
app.use('/users', users_1.default);
app.use('/groups', groups_1.default);
app.use((err, req, res) => {
    logger_1.logger.error(`ERROR: ${err}`);
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFnQztBQUNoQyxlQUFNLEVBQUUsQ0FBQztBQUNULHNEQUFxRDtBQUNyRCw2Q0FBbUM7QUFDbkMsZ0RBQXdCO0FBQ3hCLGdEQUE4QztBQUM5QywyREFBd0M7QUFDeEMsNkRBQTBDO0FBQzFDLCtDQUF5QztBQUN6Qyw0Q0FBeUM7QUFFekMsb0JBQVMsQ0FBQyxZQUFZLEVBQUU7S0FDbkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFaEQsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVUsQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFXLENBQUMsQ0FBQztBQUVoQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ0osR0FBVSxFQUNWLEdBQVksRUFDWixHQUFhLEVBQ2YsRUFBRTtJQUNBLGVBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsQ0FBQyJ9