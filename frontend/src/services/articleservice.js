import axios from "../api/axios";
const ARTICLE_API = "articles";

export const fetchArticles = async () => {
  return await axios.get(ARTICLE_API);
};

export const fetchArticleById = async (articleID) => {
  return await axios.get(ARTICLE_API + "/" + articleID);
};

export const deleteArticle = async (articleID) => {
  return await axios.delete(articleID + "/" + articleID);
};

export const addArticle = async (article) => {
  return await axios.post(ARTICLE_API, article);
};

export const editArticle = async (article) => {
  return axios.put(ARTICLE_API + "/" + article.id, article);
};

export const fetchArticlesPagination = async (page, limit) => {
  return await axios.get(
    ARTICLE_API + `/art/articlepaginate/?page=${page}&pageSize=${limit}`
  );
};
