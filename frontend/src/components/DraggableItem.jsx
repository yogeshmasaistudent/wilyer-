// src/components/DraggableItem.js
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const ItemType = "ITEM";

const DraggableItem = ({ item, onEdit, onDelete }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: item._id, left: item.position.x, top: item.position.y },
  }));

  return (
    <Box
      ref={drag}
      position="absolute"
      left={`${item.position.x}px`}
      top={`${item.position.y}px`}
      p={4}
      bg="blue.300"
      borderRadius="md"
      border="1px solid red"
    >
      {item.content}
      <Button onClick={() => onEdit(item._id)} ml={2}>
        Edit
      </Button>
      <Button onClick={() => onDelete(item._id)} ml={2}>
        Delete
      </Button>
    </Box>
  );
};

export default DraggableItem;
