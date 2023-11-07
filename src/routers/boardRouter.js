import { Router } from 'express';
import { BoardService } from '../services/index.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const boardRouter = Router();
const boardService = new BoardService();

// Board 조회
boardRouter.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    return await boardService.getBoard(id);
  })
);

// Board 전체 조회
boardRouter.get(
  '/',
  asyncHandler(async (req, res, next) => {
    return await boardService.getBoards();
  })
);

// Board 저장
boardRouter.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    return await boardService.addBoard({
      title,
      content
    });
  })
);

// Board 수정
boardRouter.patch(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    return await boardService.updateBoard(id, {
      title,
      content
    });
  })
);

// Board 삭제
boardRouter.delete(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    return await boardService.deleteBoard(id);
  })
);

export default boardRouter;
