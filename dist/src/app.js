"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const pino = __importStar(require("pino"));
const expressPinoLogger = __importStar(require("express-pino-logger"));
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const groups_1 = __importDefault(require("./routes/groups"));
const helpers_1 = require("./helpers/helpers");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
const logger = pino({
    name: 'user-app',
});
app.use(body_parser_1.json());
app.use(expressPinoLogger({
    logger,
}));
app.use('/users', users_1.default);
app.use('/groups', groups_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxzREFBcUQ7QUFDckQsNkNBQW1DO0FBQ25DLDJDQUE2QjtBQUM3Qix1RUFBeUQ7QUFDekQsZ0RBQThDO0FBQzlDLDJEQUF3QztBQUN4Qyw2REFBMEM7QUFDMUMsK0NBQXlDO0FBRXpDLG9CQUFTLENBQUMsWUFBWSxFQUFFO0tBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWhELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RCLE1BQU07Q0FDVCxDQUFDLENBQUMsQ0FBQztBQUVKLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVUsQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFXLENBQUMsQ0FBQztBQUVoQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ0osR0FBVSxFQUNWLEdBQVksRUFDWixHQUFhLEVBQ2YsRUFBRTtJQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsQ0FBQyJ9