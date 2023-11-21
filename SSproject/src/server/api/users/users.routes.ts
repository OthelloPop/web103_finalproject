import express from 'express';
import UsersController from './users.controller';
import CollectionsController from '../collections/collections.controller';

const router = express.Router();

// Add routes as needed for creating, updating, and deleting users
router.get('/', UsersController.getUsers);
router.post('/', UsersController.createUser);

// Search for a user by name and email
router.get('/search', UsersController.getUserByNameAndEmail);

// Get, update, and delete a user by id
router.get('/:id', UsersController.getUserById);
router.patch('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);

// A User's collections
router.get('/:id/collections', CollectionsController.getCollectionsByUserId);

export default router;