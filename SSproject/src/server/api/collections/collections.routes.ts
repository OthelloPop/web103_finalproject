import express from 'express';
import CollectionsController from './collections.controller';

const router = express.Router();

// Add routes as needed for creating, updating, and deleting collections
router.post('/', CollectionsController.createCollection);

router.get('/:id', CollectionsController.getCollectionById);
router.patch('/:id', CollectionsController.updateCollection);
router.delete('/:id', CollectionsController.deleteCollection);


export default router;