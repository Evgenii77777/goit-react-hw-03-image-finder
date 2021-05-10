import axios from "axios";

const key = "21141418-363b708104a3c8ce92a316b99";

const fetchArticles = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
export default { fetchArticles };
