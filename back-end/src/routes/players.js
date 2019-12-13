import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import playersController from '../controllers/playersController';

export default () => {
  const api = Router();

  //POST /api/players
  api.post('/', catchAsync(playersController.create));

  //GET /api/players
  api.get('/', catchAsync(playersController.findAll));

  return api;
}