import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/categorieservice";
import { Avatar, Box, Button, Flex, Table } from "@radix-ui/themes";
import { Pencil2Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import HeaderCategorie from "./HeaderCategorie";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getCategories = async () => {
    try {
      const res = await fetchCategories();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCategories();
  }, [])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return <Flex direction="column" gap="3">
    <Box>
      <HeaderCategorie
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
    </Box>
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nom Catégorie</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Image Catégorie</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Update</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {categories.map((cat) => {
          return (
            <Table.Row align={"center"} key={cat.id}>
              <Table.Cell>{cat.nomcategorie}</Table.Cell>
              <Table.RowHeaderCell>
                <Avatar src={cat.imagecategorie} fallback="C" />
              </Table.RowHeaderCell>
              <Table.Cell>
                <Button variant="soft" size="1">
                  <Pencil2Icon /> Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button variant="soft" size="1" color="red">
                  <TrashIcon /> Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  </Flex>;
};

export default ListCategories;
