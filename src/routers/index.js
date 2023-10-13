import { Router } from 'express';

import boardRouter from './boardRouter.js';

// 버전1 라우터
const v1Router = Router();

v1Router.use('/boards', boardRouter);

export const v1 = v1Router;
