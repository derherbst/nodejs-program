"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers/helpers");
const interceptor_1 = require("../../helpers/interceptor");
const users_1 = require("../users");
const user_1 = require("../../services/user");
jest.mock('../../services/user');
jest.mock('../../helpers/helpers', () => ({
    internalError: jest.fn(),
    successResponse: jest.fn(),
}));
const createMockUser = (data) => (Object.assign({ id: '367a2a34-f464-4ecd-9d3b-aba998312977', login: 'derHerbst', password: '123456', age: 27, isDeleted: false }, data));
describe('Call createUser method', () => {
    beforeEach(() => {
        user_1.userService.createUser = jest.fn().mockResolvedValueOnce({
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });
    it('should create user', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.createUser.mockClear();
        const req = interceptor_1.mockRequest();
        req.body = {
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.createUser(req, res, next);
        expect(user_1.userService.createUser).toHaveBeenCalledTimes(1);
        expect(user_1.userService.createUser).toHaveBeenCalledWith(req.body);
    }));
    it('should return status error', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.createUser = jest.fn().mockRejectedValueOnce(new Error());
        const req = interceptor_1.mockRequest();
        req.body = {
            password: '123456',
            age: null,
            isDeleted: false,
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.createUser(req, res, next);
        expect(helpers_1.internalError).toBeCalledTimes(1);
    }));
});
describe('Call getUsers method', () => {
    beforeEach(() => {
        user_1.userService.getUsers = jest.fn().mockResolvedValueOnce([{
                login: 'derHerbst',
                password: '123456',
                age: 27,
                isDeleted: false,
            }]);
    });
    it('with valid login', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.getUsers.mockClear();
        const req = interceptor_1.mockRequest();
        req.query = {
            loginSubstring: 'derHerbst',
            limit: 1,
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        const suggestedUsers = [
            {
                id: '367a2a34-f464-4ecd-9d3b-aba998312977',
                login: 'derHerbst',
                password: '123456',
                age: 27,
                isDeleted: false,
            },
        ];
        yield users_1.getUsers(req, res, next);
        expect(user_1.userService.getUsers).toHaveBeenCalledTimes(1);
        expect(user_1.userService.getUsers).toHaveBeenCalledWith(req.query);
    }));
    it('with error', () => __awaiter(void 0, void 0, void 0, function* () {
        // internalError.mockClear();
        user_1.userService.getUsers.mockClear();
        user_1.userService.getUsers = jest.fn().mockRejectedValueOnce(new Error());
        const req = interceptor_1.mockRequest();
        req.query = {
            loginSubstring: 'error',
            limit: 1,
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.getUsers(req, res, next);
        // expect(userService.getUsers).toHaveBeenCalledTimes(1);
        // expect(userService.getUsers).toHaveBeenCalledWith(req.query);
        expect(helpers_1.internalError).toBeCalledTimes(1);
        expect(helpers_1.internalError).toBeCalledWith(res);
    }));
});
describe('Call updateUser method', () => {
    beforeEach(() => {
        user_1.userService.updateUser = jest.fn().mockResolvedValueOnce({
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });
    it('should update user', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = interceptor_1.mockRequest();
        req.body = {
            password: '666',
        };
        const updateBody = req.body;
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.updateUser(req, res, next);
        expect(user_1.userService.updateUser).toBeCalledTimes(1);
        expect(user_1.userService.updateUser).toBeCalledWith(Object.assign(Object.assign({}, req.params), { updateBody }));
    }));
    it('with error', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.updateUser.mockClear();
        helpers_1.internalError.mockClear();
        user_1.userService.updateUser = jest.fn().mockRejectedValueOnce(new Error());
        const req = interceptor_1.mockRequest();
        req.body = {};
        const updateBody = req.body;
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.updateUser(req, res, next);
        expect(user_1.userService.updateUser).toBeCalledTimes(1);
        expect(user_1.userService.updateUser).toBeCalledWith(Object.assign(Object.assign({}, req.params), { updateBody }));
        expect(res.status).toBeCalledWith(401);
        expect(res.json).toBeCalledWith({
            status: 'failed',
            message: `Could not find!`
        });
    }));
});
describe('Call deleteUser method', () => {
    beforeEach(() => {
        user_1.userService.deleteUser = jest.fn().mockResolvedValueOnce({
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: true,
        });
        ;
    });
    it('should delete user', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.deleteUser.mockClear();
        const req = interceptor_1.mockRequest();
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.deleteUser(req, res, next);
        expect(user_1.userService.deleteUser).toBeCalledTimes(1);
        expect(user_1.userService.deleteUser).toBeCalledWith(req.params.id);
    }));
    it('call internalError', () => __awaiter(void 0, void 0, void 0, function* () {
        helpers_1.internalError.mockClear();
        user_1.userService.deleteUser = jest.fn().mockRejectedValueOnce(new Error());
        const req = interceptor_1.mockRequest();
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.deleteUser(req, res, next);
        expect(helpers_1.internalError).toBeCalledTimes(1);
        expect(helpers_1.internalError).toBeCalledWith(res);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9fX3Rlc3RzX18vdXNlcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLG1EQUF1RTtBQUN2RSwyREFJbUM7QUFDbkMsb0NBS2tCO0FBQ2xCLDhDQUFrRDtBQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ3hCLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0NBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUosTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUM3QixFQUFFLEVBQUUsc0NBQXNDLEVBQzFDLEtBQUssRUFBRSxXQUFXLEVBQ2xCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxFQUFFLEVBQ1AsU0FBUyxFQUFFLEtBQUssSUFDYixJQUFJLEVBQ1QsQ0FBQztBQUdILFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLGtCQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyRCxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQVMsRUFBRTtRQUNoQyxrQkFBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxNQUFN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