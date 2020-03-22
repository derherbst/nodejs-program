import { internalError, successResponse } from './../helpers/helpers';
import {
    mockRequest,
    mockResponse,
    mockNext
} from './../helpers/interceptor';
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    validateUserData,
} from './users';
import { User, userService } from './../services/user';

jest.mock('./../services/user')

jest.mock('./../helpers/helpers', () => ({
    internalError: jest.fn(),
    successResponse: jest.fn(),
}));

// beforeEach(() => {
//     jest.clearAllMocks();
// });

describe('Call createUser method', () => {
    beforeEach(() => {
        userService.createUser = jest.fn().mockResolvedValueOnce({
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });
    it('should return status 200 and correct value', async () => {
        userService.createUser.mockClear();
        const req = mockRequest();
        req.body = {
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        };
        const res = mockResponse();
        const next = mockNext();
        const responseData = {
            ...req.body,
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        };
        // expect.assertions(1);

        // expect(userService.createUser(req.body)).resolves.toEqual(responseData);

        await createUser(req, res, next);

        expect(userService.createUser).toHaveBeenCalledTimes(1);
        expect(userService.createUser).toHaveBeenCalledWith(req.body);

        // expect(res.json).toBeCalledWith({
        //     message: 'User was created!',
        //     createdUser: responseData,
        // });
        // expect(res.status).toBeCalledWith(200);
    });

    it('should return status error', async () => {
        userService.createUser = jest.fn().mockRejectedValueOnce(new Error());


        // userService.createUser.mockClear();
        // internalError = jest.fn();
        const req = mockRequest();
        req.body = {
            password: '123456',
            age: null,
            isDeleted: false,
        };
        const res = mockResponse();
        const next = mockNext();
        await createUser(req, res, next);

        // expect.assertions(1);

        // expect(resUtils.internalError).toBeCalledTimes(1);
        
        // expect(resUtils.internalError).toBeCalledWith(resMock

        expect(internalError).toBeCalledTimes(1);
        // expect(res.status).toBeCalledWith(500);
        // expect(internalError).toBeCalledWith(res);

        // return expect(userService.createUser(req.body)).rejects.toEqual(new Error('Error!'));
        
    })
});
describe('Call getUsers method', () => {
    beforeEach(() => {
        userService.getUsers = jest.fn().mockResolvedValueOnce([{
                    login: 'derHerbst',
                    password: '123456',
                    age: 27,
                    isDeleted: false,
        }]);
    });

    it('with valid login', async () => {
        userService.getUsers.mockClear();
        const req = mockRequest();
        req.query = {
            loginSubstring: 'derHerbst',
            limit: 1,
        };
        const res = mockResponse();
        const next = mockNext();
        const suggestedUsers = [
            {
                id: '367a2a34-f464-4ecd-9d3b-aba998312977',
                login: 'derHerbst',
                password: '123456',
                age: 27,
                isDeleted: false,
            },
        ];

        await getUsers(req, res, next);
        
        expect(userService.getUsers).toHaveBeenCalledTimes(1);
        expect(userService.getUsers).toHaveBeenCalledWith(req.query);  
    });

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
        userService.updateUser = jest.fn().mockResolvedValueOnce({
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });

    it('should update user', async () => {
        const req = mockRequest();
        req.query = {
            updateBody: {
                password: '666',
            }
        };
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        }
        const res = mockResponse();
        const next = mockNext();
        await updateUser(req, res, next);

        expect(userService.updateUser).toBeCalledTimes(1);
        expect(userService.updateUser).toBeCalledWith({...req.params, ...req.query});
    });
});