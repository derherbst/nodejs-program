import { UserModel } from '../../models/user';
import { dataAccess } from '../../data-access/data-access';
import { json } from 'body-parser';
import { internalError, successResponse } from '../../helpers/helpers';
import {
    mockRequest,
    mockResponse,
    mockNext
} from '../../helpers/interceptor';
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} from '../users';
import { userService } from '../../services/user';

jest.mock('../../services/user')

jest.mock('../../helpers/helpers', () => ({
    internalError: jest.fn(),
    successResponse: jest.fn(),
}));

const createMockUser = (data) => ({
    id: '367a2a34-f464-4ecd-9d3b-aba998312977',
    login: 'derHerbst',
    password: '123456',
    age: 27,
    isDeleted: false,
    ...data,
});


describe('Call createUser method', () => {
    beforeEach(() => {
        userService.createUser = jest.fn().mockResolvedValueOnce({
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: false,
        });
    });
    it('should create user', async () => {
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

        await createUser(req, res, next);

        expect(userService.createUser).toHaveBeenCalledTimes(1);
        expect(userService.createUser).toHaveBeenCalledWith(req.body);
    });

    it('should return status error', async () => {
        userService.createUser = jest.fn().mockRejectedValueOnce(new Error());

        const req = mockRequest();
        req.body = {
            password: '123456',
            age: null,
            isDeleted: false,
        };
        const res = mockResponse();
        const next = mockNext();
        await createUser(req, res, next);

        expect(internalError).toBeCalledTimes(1);
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

    it('with error', async () => {
        // internalError.mockClear();
        userService.getUsers.mockClear();
        userService.getUsers = jest.fn().mockRejectedValueOnce(new Error());

        const req = mockRequest();
        req.query = {
            loginSubstring: 'error',
            limit: 1,
        };
        const res = mockResponse();
        const next = mockNext();

        await getUsers(req, res, next);

        // expect(userService.getUsers).toHaveBeenCalledTimes(1);
        // expect(userService.getUsers).toHaveBeenCalledWith(req.query);

        expect(internalError).toBeCalledTimes(1);
        expect(internalError).toBeCalledWith(res);
    });


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
        req.body = {
            password: '666',
        };
        const updateBody = req.body;
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        }
        const res = mockResponse();
        const next = mockNext();
        await updateUser(req, res, next);

        expect(userService.updateUser).toBeCalledTimes(1);
        expect(userService.updateUser).toBeCalledWith({...req.params, updateBody});
    });

    it('with error', async () => {
        userService.updateUser.mockClear();
        internalError.mockClear();
        userService.updateUser = jest.fn().mockRejectedValueOnce(new Error());

        const req = mockRequest();
        req.body = {};
        const updateBody = req.body;
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        }
        const res = mockResponse();
        const next = mockNext();
        await updateUser(req, res, next);

        expect(userService.updateUser).toBeCalledTimes(1);
        expect(userService.updateUser).toBeCalledWith({...req.params, updateBody});

        expect(res.status).toBeCalledWith(401);
        expect(res.json).toBeCalledWith({
            status: 'failed',
            message: `Could not find!`
        });
    })
});

describe('Call deleteUser method', () => {
    beforeEach(() => {
        userService.deleteUser = jest.fn().mockResolvedValueOnce({
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
            login: 'derHerbst',
            password: '123456',
            age: 27,
            isDeleted: true,
        });;
    });
    it('should delete user', async () => {
        userService.deleteUser.mockClear();
        const req = mockRequest();
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        }
        const res = mockResponse();
        const next = mockNext();
        await deleteUser(req, res, next);

        expect(userService.deleteUser).toBeCalledTimes(1);
        expect(userService.deleteUser).toBeCalledWith(req.params.id);
    });

    it('call internalError', async () => {
        internalError.mockClear();
        userService.deleteUser = jest.fn().mockRejectedValueOnce(new Error());

        const req = mockRequest();
        req.params = {
            id: '367a2a34-f464-4ecd-9d3b-aba998312977',
        }
        const res = mockResponse();
        const next = mockNext();
  
        await deleteUser(req, res, next);
  
        expect(internalError).toBeCalledTimes(1);
        expect(internalError).toBeCalledWith(res);
      });
});