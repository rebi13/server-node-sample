import { BoardModel } from '../db/models/index.js';

class BoardService {
  constructor() {
    this.boardModel = new BoardModel();
  }
  getBoard(id) {
    return this.boardModel.findById(id);
  }
  getBoards() {
    return this.boardModel.findBoards();
  }
  addBoard(board) {
    return this.boardModel.create(board);
  }
  updateBoard(id, board) {
    return this.boardModel.update(id, board);
  }
  deleteBoard(id) {
    return this.boardModel.delete(id);
  }
}
export default BoardService;
