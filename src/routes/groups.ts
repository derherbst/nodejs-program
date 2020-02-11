import { Router } from 'express';
import { createGroup, getGroupById, getGroups, updateGroup, deleteGroup, addUsersToGroup } from '../controllers/groups';

const groupRouter = Router();

groupRouter.post('/', createGroup);
groupRouter.post('/addUsersToGroup', addUsersToGroup);
groupRouter.get('/', getGroups);
groupRouter.get('/:id', getGroupById);
groupRouter.patch('/:id', updateGroup);
groupRouter.delete('/:id', deleteGroup);

export default groupRouter;