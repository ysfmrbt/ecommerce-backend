import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
const NavigationLink = ({ href, ...props }) => {
  const location = useLocation()
  const isActive = location.pathname === href;
  return (<NavigationMenu.Link asChild active={isActive}>
    <Button variant={isActive ? "solid" : "soft"} size="1" asChild={Link}>
      <Link to={href} {...props} />
    </Button>
  </NavigationMenu.Link>)
}
const Menu = () => {
  return (

    <Box>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <Flex gap="3">
            <NavigationLink href="/articles">Articles</NavigationLink>
            <NavigationLink href="/categories">Categories</NavigationLink>
            <NavigationLink href="/scategories">Scategories</NavigationLink>
          </Flex>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Box>
  );
};

export default Menu;
