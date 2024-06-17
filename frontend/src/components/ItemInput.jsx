import React from "react";
import { Input, Button, Box } from "@chakra-ui/react";

const ItemInput = ({ newItemContent, setNewItemContent, addItem }) => {
  return (
    <Box p="5px" >
      <Input
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
        placeholder="New item content"
        w="190px"
      />
      <Button onClick={addItem} ml={2}>
        Add Item
      </Button>
    </Box>
  );
};

export default ItemInput;
