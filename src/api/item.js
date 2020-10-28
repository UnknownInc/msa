import express from 'express';
const api = express.Router();

api.get('/:id', async (req, res) => {
  return res.json({id: req.params.id});
});

module.exports=api;