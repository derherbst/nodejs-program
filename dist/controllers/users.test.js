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
const helpers_1 = require("./../helpers/helpers");
const interceptor_1 = require("./../helpers/interceptor");
const users_1 = require("./users");
const user_1 = require("./../services/user");
jest.mock('./../services/user');
jest.mock('./../helpers/helpers', () => ({
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
    // it('with error', async () => {
    //     // internalError.mockClear();
    //     userService.getUsers.mockClear();
    //     userService.getUsers = jest.fn().mockRejectedValueOnce(new Error());
    //     const req = mockRequest();
    //     req.query = {
    //         loginSubstring: 'error',
    //         limit: 1,
    //     };
    //     const res = mockResponse();
    //     const next = mockNext();
    //     await getUsers(req, res, next);
    //     // expect(userService.getUsers).toHaveBeenCalledTimes(1);
    //     // expect(userService.getUsers).toHaveBeenCalledWith(req.query);
    //     expect(internalError).toBeCalledTimes(1);
    //     expect(internalError).toBeCalledWith(res);
    // });
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
    // it('with error', async () => {
    //     userService.updateUser.mockClear();
    //     userService.updateUser = jest.fn().mockRejectedValueOnce(new Error());
    //     const req = mockRequest();
    //     req.body = {};
    //     const updateBody = req.body;
    //     req.params = {
    //         id: '367a2a34-f464-4ecd-9d3b-aba998312977',
    //     }
    //     const res = mockResponse();
    //     const next = mockNext();
    //     await updateUser(req, res, next);
    //     expect(userService.updateUser).toBeCalledTimes(1);
    //     expect(userService.updateUser).toBeCalledWith({...req.params, updateBody});
    //     expect(res.status).toBeCalledWith(401);
    //     expect(res.json).toBeCalledWith({
    //         status: 'failed',
    //         message: `Could not find!`
    //     });
    // })
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2Vycy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQXNFO0FBQ3RFLDBEQUlrQztBQUNsQyxtQ0FLaUI7QUFDakIsNkNBQWlEO0FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtBQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDeEIsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSixNQUFNLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUJBQzdCLEVBQUUsRUFBRSxzQ0FBc0MsRUFDMUMsS0FBSyxFQUFFLFdBQVcsRUFDbEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsR0FBRyxFQUFFLEVBQUUsRUFDUCxTQUFTLEVBQUUsS0FBSyxJQUNiLElBQUksRUFDVCxDQUFDO0FBR0gsUUFBUSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtJQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ1osa0JBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JELEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsb0JBQW9CLEVBQUUsR0FBUyxFQUFFO1FBQ2hDLGtCQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sR0FBRyxHQUFHLHlC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