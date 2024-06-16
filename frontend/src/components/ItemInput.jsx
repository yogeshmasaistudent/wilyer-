// src/components/ItemInput.js
import React from "react";
import { Input, Button } from "@chakra-ui/react";

const ItemInput = ({ newItemContent, setNewItemContent, addItem }) => {
  return (
    <>
      <Input
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
        placeholder="New item content"
        w="190px"
      />
      <Button onClick={addItem}>Add Item</Button>
    </>
  );
};

export default ItemInput;
