import express from 'express';

import noteRouter from './src/routes/noteRoutes.js';

const router = express.Router();

router.use('/server/', noteRouter)

export default router