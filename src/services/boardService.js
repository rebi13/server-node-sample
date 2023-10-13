import { BoardDAO } from '../db/index.js';

class BoardService {
  constructor() {
    this.boardDAO = new BoardDAO();
  }
  async getBoard(id) {
    return await this.boardDAO.findById(id);
  }
  async getBoards() {
    return await this.boardDAO.findBoards();
  }
  async addBoard(board) {
    return await this.boardDAO.create(board);
  }
  async updateBoard(id, board) {
    return await this.boardDAO.update(id, board);
  }
  async deleteBoard(id) {
    return await this.boardDAO.delete(id);
  }
}
export default BoardService;
