import { buildResponse } from '../misc/utils.js';

const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      const response = await requestHandler(req, res); // 수정된 부분
      return res.json(buildResponse(response));
    } catch (err) {
      next(err);
    }
  };
};

export default asyncHandler;
