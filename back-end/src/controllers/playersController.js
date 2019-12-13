import Player from '../models/player';

export default {
  async create(req, res, next) {
    const player = await new Player(req.body).save();
    console.log(req.body)
    return res.status(201).send({data: player, message: `Score added!`});
  },

  async findAll(req, res, next) {
    const players = await Player.find().sort({ score: -1});

    return res.status(200).send({data: players});
  }
}