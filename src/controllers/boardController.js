import { BoardService } from '../services/index.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const boardService = new BoardService();

class BoardController {
  async getBoard(req, res, next) {}
  async getBoards(req, res, next) {}
  async postBoard(req, res, next) {}
  async patchBoard(req, res, next) {}
  async deleteBoard(req, res, next) {}
}
