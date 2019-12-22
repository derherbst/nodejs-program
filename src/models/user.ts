import Joi from '@hapi/joi'

export const userSchema = Joi.object({
    id: Joi.string().uuid().optional(),
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().min(4).max(130),
    isDeleted: Joi.boolean().required(),
})

export class User {
    constructor(
        public id: string,
        public login: string,
        public password: string,
        public age: number,
        public isDeleted: boolean
    ) {
        
    }
}