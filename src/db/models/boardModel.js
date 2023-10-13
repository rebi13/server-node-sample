import { model } from 'mongoose';
import { boardSchema } from '../schemas/index.js';

const BoardModel = model('Board', boardSchema);

export default BoardModel;
