import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategorie } from "../../services/categorieservice";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";

const InsertCategorie = () => {
  const navigate = useNavigate()
  const [categorie, setCategorie] = useState({})
  const handleSubmit = async (event) => {
    event.preventDefault()
    await addCategorie(categorie).then(() => {
      navigate("/categories")
    }).catch((err) => {
      console.log(err)
    })
  }

  return <Flex>
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3" p="3">
        <Box>
          <TextField.Root required={true} value={categorie.imagecategorie} placeholder="Image" onChange={(e) => {
            setCategorie({ ...categorie, imagecategorie: e.target.value })
          }}>
          </TextField.Root>
          {categorie.imagecategorie ? <img src={categorie.imagecategorie} width="70" alt="categorie" /> : null}
        </Box>
        <Box>
          <Button type="submit" variant="soft" size="1" onClick={(e) => handleSubmit(e)}>Enregistrer</Button>
        </Box>
      </Flex>
    </form>
  </Flex>;
};

export default InsertCategorie;
