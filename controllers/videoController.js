const Video = require('../models/video');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/video/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  
  const filetypes = /mp4|avi|mkv|mov/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Seules les vidéos sont autorisées !'));
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });


const getAllVideo = async (req, res) => {
  try {
    const [rows] = await Video.getAllVideo();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const [rows] = await Video.getVideoById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Cette video n\'existe pas .' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVideo = async (req, res) => {
  try {

    if (req.files) {
      const videos = req.files.map((file) => ({
        url: `uploads/video/${file.originalname}`,
        titre : req.body.titre,
        duree : '11:20',
        id_cours: 1
      }));
      const result = await Video.createVideo(videos);
      res.status(201).json({ message: `Video n°: ${result[0].insertId} a été enregistré.`});
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteVideo = async (req, res) => {
  try {
    const result = await Video.deleteVideo(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Video ne pas trouver.' });
    res.json({ message: 'Video supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllVideo, getVideoById, createVideo, deleteVideo, upload };

