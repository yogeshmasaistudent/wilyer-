import React from "react";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { useDrag } from "react-dnd";
const ItemType = "ITEM";

const DraggableItem = ({ item, onEdit, onDelete }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: item._id, left: item.position.x, top: item.position.y },
  }));

  return (
    <Stack m="5">
      <Box>
        <Box
          ref={drag}
          position="absolute"
          left={`${item.position.x}px`}
          top={`${item.position.y}px`}
          p={4}
          bg="blue.300"
          borderRadius="md"
    
        >
          {item.content}
          <Button onClick={() => onEdit(item._id)} ml={2}>
            Edit
          </Button>
          <Button onClick={() => onDelete(item._id)} ml={2}>
            Delete
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default DraggableItem;
