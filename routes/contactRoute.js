import express from 'express';
import contactController from '../controller/contactController.js';

const router = express.Router();
const { getContact, createContact } = contactController;

router.route('/createContact').post(createContact);
router.route('/getContact/:email').get(getContact);

export default router;