// controllers/CoursController.js
const Cours = require('../models/cours')

const getAllCours = async (req, res) => {
  try {
    const [rows] = await Cours.getAllCours();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoursById = async (req, res) => {
  try {
    const [rows] = await Cours.getCoursById(req.params.id);
    if (rows.length === 0)
      return res
        .status(404)
        .json({ message: `Le numèro ${req.params.id} n'associe à aucun Cours.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCours = async (req, res) => {
  try {
    const result = await Cours.createCours(req.body);
    res.status(201).json({
      message: `Cours N°: ${result[0].insertId} a été enregistré.`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCours = async (req, res) => {
  try {

    const result = await Cours.updateCours(req.params.id, req.body);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: `Le numèro ${req.params.id} n'associe à aucun Cours.` });
    res.json({ message: `Cours n° : ${req.params.id} mis à jour.`});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCours = async (req, res) => {
  try {
    const result = await Cours.deleteCours(req.params.id);
    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: `Le numèro ${req.params.id} n'associe à aucun Cours.` });
    res.json({ message: `Cours n° : ${req.params.id} a été supprimé.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours
};
