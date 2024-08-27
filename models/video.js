const db = require('../db');

const getAllVideo = () => db.query('SELECT * FROM video');

const getVideoById = (id) => db.query('SELECT * FROM video WHERE id_video = ?', [id]);

const createVideo = (video) => db.query('INSERT INTO video (url, titre, duree, id_cours) VALUES ?', [video.map(v => [v.url, v.titre, v.duree, v.id_cours])]);

const updateVideo = (id, video) => db.query('UPDATE video SET ? WHERE id_video = ?', [video, id]);

const deleteVideo = (id) => db.query('DELETE FROM video WHERE id_video = ?', [id]);


module.exports = { 
  getAllVideo, 
  getVideoById, 
  createVideo, 
  updateVideo, 
  deleteVideo
};
