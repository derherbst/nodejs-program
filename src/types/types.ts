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

type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface GroupType extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        id: string,
        name: string,
        permissions: Array<Permission>,
    }
}
