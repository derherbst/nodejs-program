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
// beforeEach(() => {
//     jest.clearAllMocks();
// });
describe('Call createUser method', () => {
    beforeEach(() => {
        user_1.userService.createUser = jest.fn().mockResolvedValueOnce({
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });
    it('should return status 200 and correct value', () => __awaiter(void 0, void 0, void 0, function* () {
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
        const responseData = Object.assign(Object.assign({}, req.body), { id: '367a2a34-f464-4ecd-9d3b-aba998312977' });
        // expect.assertions(1);
        // expect(userService.createUser(req.body)).resolves.toEqual(responseData);
        yield users_1.createUser(req, res, next);
        expect(user_1.userService.createUser).toHaveBeenCalledTimes(1);
        expect(user_1.userService.createUser).toHaveBeenCalledWith(req.body);
        // expect(res.json).toBeCalledWith({
        //     message: 'User was created!',
        //     createdUser: responseData,
        // });
        // expect(res.status).toBeCalledWith(200);
    }));
    it('should return status error', () => __awaiter(void 0, void 0, void 0, function* () {
        user_1.userService.createUser = jest.fn().mockRejectedValueOnce(new Error());
        // userService.createUser.mockClear();
        // internalError = jest.fn();
        const req = interceptor_1.mockRequest();
        req.body = {
            password: '123456',
            age: null,
            isDeleted: false,
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.createUser(req, res, next);
        // expect.assertions(1);
        // expect(resUtils.internalError).toBeCalledTimes(1);
        // expect(resUtils.internalError).toBeCalledWith(resMock
        expect(helpers_1.internalError).toBeCalledTimes(1);
        // expect(res.status).toBeCalledWith(500);
        // expect(internalError).toBeCalledWith(res);
        // return expect(userService.createUser(req.body)).rejects.toEqual(new Error('Error!'));
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
        req.query = {
            updateBody: {
                password: '666',
            }
        };
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        const res = interceptor_1.mockResponse();
        const next = interceptor_1.mockNext();
        yield users_1.updateUser(req, res, next);
        expect(user_1.userService.updateUser).toBeCalledTimes(1);
        expect(user_1.userService.updateUser).toBeCalledWith(Object.assign(Object.assign({}, req.params), req.query));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2Vycy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNFO0FBQ3RFLDBEQUlrQztBQUNsQyxtQ0FNaUI7QUFDakIsNkNBQXVEO0FBRXZELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtBQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDeEIsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLE1BQU07QUFFTixRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0lBQ3BDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixrQkFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDckQsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7UUFDeEQsa0JBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsTUFBTSxHQUFHLEdBQUcseUJBQVcsRUFBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDUCxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFD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