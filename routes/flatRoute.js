import express from 'express';
import flatController from '../controller/flatController.js';

const router = express.Router();
const { getFlat, getFlatByOwner,createFlat,updateFlat,deleteFlat } = flatController;

router.route('/createFlat').post(createFlat);
router.route('/getFlats/:type').get(getFlat);
router.route('/getFlat/:email').get(getFlatByOwner);
router.route('/updateFlat/:id').put(updateFlat);
router.route('/delateFlat/:id').delete(deleteFlat);

export default router;