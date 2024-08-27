// models/cours.js
const db = require("../db");

const getAllCours = () => db.query(`SELECT * FROM cours;`);

const getCoursById = (id_cours) => db.query(`SELECT * FROM cours WHERE id_cours = ?;`, [id_cours])

const createCours = (cours) => db.query("INSERT INTO cours SET ?", cours);

const updateCours = (id_cours, cours) => db.query("UPDATE cours SET ? WHERE id_cours = ?", [cours, id_cours]);

const deleteCours = (id_cours) => db.query("DELETE FROM cours WHERE id_cours = ?", [id_cours]);

module.exports = {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours
};


