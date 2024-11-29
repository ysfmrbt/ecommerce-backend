import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Button, Flex, Select, Table } from "@radix-ui/themes";

const AfficheArticle = ({ articles, handleLimitChange, limit }) => {
  return (
    <Flex>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Référence</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Désignation</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Marque</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantité</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Prix</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Update</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
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
          <Table.Row>
            <Table.Cell colSpan={8} justify={"start"}>
              <Flex justify={"center"}>
                <Box>
                  <Select.Root
                    defaultValue={limit.toString()}
                    onChange={handleLimitChange}
                  >
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="5">5</Select.Item>
                      <Select.Item value="10">10</Select.Item>
                      <Select.Item value="20">20</Select.Item>
                      <Select.Item value="100">100</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Box>
              </Flex>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default AfficheArticle;
