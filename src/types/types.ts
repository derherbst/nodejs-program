import Joi from '@hapi/joi';
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import 'joi-extract-type'

export interface UserType extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        id: string,
        login: string,
        password: string,
        age: number,
        isDeleted: boolean,
    }
}