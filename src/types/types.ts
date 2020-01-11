import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface UserType extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        id: string,
        login: string,
        password: string,
        age: number,
        isDeleted: boolean,
    }
}
