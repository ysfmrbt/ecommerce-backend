import { useState, useEffect } from "react";
import { fetchArticles } from "./services/articleservice";
import { Avatar, Box, Table } from "@radix-ui/themes";
const Liste = () => {
  const [articles, setArticles] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetchArticles();
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Box>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Référence</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Désignation</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Marque</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantité</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Prix</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {articles.map((article) => {
            return (
              <Table.Row align={"center"} key={article.id}>
                <Table.RowHeaderCell>
                  <Avatar src={article.imageart} fallback="A" />
                </Table.RowHeaderCell>
                <Table.Cell>{article.reference}</Table.Cell>
                <Table.Cell>{article.designation}</Table.Cell>
                <Table.Cell>{article.marque}</Table.Cell>
                <Table.Cell>{article.qtestock}</Table.Cell>
                <Table.Cell justify={"end"}>{article.prix}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
export default Liste;
