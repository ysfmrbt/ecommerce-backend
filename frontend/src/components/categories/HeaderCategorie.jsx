import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex, TextField } from "@radix-ui/themes"
import { Link } from "react-router-dom"

const HeaderCategorie = ({ handleSearchChange, searchText }) => {
    return (
        <Flex gap="3" align="center" p="3">
            <Box>
                <Button variant="soft" size="2" asChild={Link}>
                    <Link to={"/categories/add"}>
                        <PlusIcon /> New
                    </Link>
                </Button>
            </Box>
            <Box>
                <TextField.Root
                    onChange={handleSearchChange}
                    value={searchText}
                    placeholder="Rechercher des catégories"
                >
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
            </Box>
        </Flex>
    )
}

export default HeaderCategorie