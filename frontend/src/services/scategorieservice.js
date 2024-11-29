import axios from "../api/axios";
const SCATEGORIE_API = "scategories";
export const fetchscategories = async () => {
  return await axios.get(SCATEGORIE_API);
};
export const fetchScategorieById = async (scategorieId) => {
  return await axios.get(SCATEGORIE_API + "/" + scategorieId);
};
export const deleteScategorie = async (scategorieId) => {
  return await axios.delete(SCATEGORIE_API + "/" + scategorieId);
};
export const addScategorie = async (scategorie) => {
  return await axios.post(SCATEGORIE_API, scategorie);
};
export const editScategorie = (scategorie) => {
  return axios.put(SCATEGORIE_API + "/" + scategorie.id, scategorie);
};
