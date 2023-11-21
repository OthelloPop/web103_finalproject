import express from 'express';
import ProfilesController from './profiles.controller';

const router = express.Router();

// Add routes as needed for creating, updating, and deleting profiles
router.get('/', ProfilesController.getProfiles);
router.get('/:id', ProfilesController.getProfileByUserId);
router.post('/', ProfilesController.createProfile);
router.patch('/:id', ProfilesController.updateProfileByUserId);
router.delete('/:id', ProfilesController.deleteProfileByUserId);

export default router;