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
    const result = await boardService.getBoard(id);
    return result;
  })
);

// Board 전체 조회
boardRouter.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const result = await boardService.getBoards(); // 새로운 메서드 추가
    return result;
  })
);

// Board 저장
boardRouter.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    const result = await boardService.addBoard({
      title,
      content
    });
    return result;
  })
);

// Board 수정
boardRouter.patch(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await boardService.updateBoard(id, {
      title,
      content
    });
    return result;
  })
);

// Board 삭제
boardRouter.delete(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const result = await boardService.deleteBoard(id);
    return result;
  })
);

export default boardRouter;
