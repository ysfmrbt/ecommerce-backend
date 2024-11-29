import { useEffect, useState } from "react";
import { fetchArticlesPagination } from "../../services/articleservice";
import AfficheArticle from "./AfficheArticle";
import Pagination from "./Pagination";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import HeaderArticle from "./HeaderArticle";
const ListArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(5);
  const [searchText, setSearchText] = useState("");

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const fetchProducts = async (page, limit) => {
    try {
      const res = await fetchArticlesPagination(page, limit, searchText);
      setArticles(res.data.articles);
      setTotalPages(res.data.totalPages);
      console.info(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, limit, searchText);
  }, [currentPage, limit, searchText]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <Flex direction="column" gap="3" p="3">
      <Box>
        <HeaderArticle
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </Box>
      <Box>
        <AfficheArticle
          handleLimitChange={handleLimitChange}
          limit={limit}
          articles={articles}
        />
      </Box>
      <Box>
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Box>
    </Flex>
  );
};

export default ListArticles;
