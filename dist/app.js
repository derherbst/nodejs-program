"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const groups_1 = __importDefault(require("./routes/groups"));
const helpers_1 = require("./helpers/helpers");
database_1.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/users', users_1.default);
app.use('/groups', groups_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
app.listen(helpers_1.PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFxRDtBQUNyRCw2Q0FBbUM7QUFDbkMsZ0RBQThDO0FBQzlDLDJEQUF3QztBQUN4Qyw2REFBMEM7QUFDMUMsK0NBQXlDO0FBRXpDLG9CQUFTLENBQUMsWUFBWSxFQUFFO0tBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWhELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVUsQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFXLENBQUMsQ0FBQztBQUVoQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ0osR0FBVSxFQUNWLEdBQVksRUFDWixHQUFhLEVBQ2YsRUFBRTtJQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsQ0FBQyJ9