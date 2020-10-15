import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import OrphanagesController from '../controllers/OrphanagesController';

const upload = multer(multerConfig);

const orphanagesRoutes = Router();

const orphanagesController = new OrphanagesController();

orphanagesRoutes.get('/', orphanagesController.index);
orphanagesRoutes.get('/:id', orphanagesController.show);
orphanagesRoutes.post('/', upload.array('images'), orphanagesController.create);

export default orphanagesRoutes;
