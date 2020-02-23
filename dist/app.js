"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const groups_1 = __importDefault(require("./routes/groups"));
const helpers_1 = require("./helpers/helpers");
const logger_1 = require("./logger/logger");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/users', users_1.default);
app.use('/groups', groups_1.default);
app.use((err, req, res) => {
    logger_1.logger.error(`ERROR: ${err}`);
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFnQztBQUNoQyxlQUFNLEVBQUUsQ0FBQztBQUNULHNEQUFxRDtBQUNyRCw2Q0FBbUM7QUFDbkMsZ0RBQThDO0FBQzlDLDJEQUF3QztBQUN4Qyw2REFBMEM7QUFDMUMsK0NBQXlDO0FBQ3pDLDRDQUF5QztBQUV6QyxvQkFBUyxDQUFDLFlBQVksRUFBRTtLQUNuQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVoRCxNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxFQUFFLENBQUMsQ0FBQztBQUVoQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFVLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBVyxDQUFDLENBQUM7QUFFaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNKLEdBQVUsRUFDVixHQUFZLEVBQ1osR0FBYSxFQUNmLEVBQUU7SUFDQSxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLENBQUMifQ==