import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const HeaderArticle = ({ searchText, handleSearchChange }) => {
  return (
    <Flex gap="3" align="center">
      <Box>
        <Button variant="soft" size="2" asChild={Link}>
          <Link to={"/articles/add"}>
            <PlusIcon /> New
          </Link>
        </Button>
      </Box>
      <Box>
        <TextField.Root
          onChange={handleSearchChange}
          value={searchText}
          placeholder="Rechercher des articles…"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>
    </Flex>
  );
};

export default HeaderArticle;
