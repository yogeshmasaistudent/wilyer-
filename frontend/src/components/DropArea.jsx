// src/components/DropArea.js
import React from "react";
import { Box } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

const ItemType = "ITEM";

const DropArea = ({ items, updateItemPosition, editItem, deleteItem }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      updateItemPosition(item.id, { x: left, y: top });
    },
  }));

  return (
    <Box
      ref={drop}
      width="45%" // Adjusted width to display on the right side
      height="635px"
      bg="gray.100"
      // position="absolute" // Positioning the DropArea
      right="0" // Aligning to the right side of the parent container
      top="0" // Aligning to the top of the parent container
    >
      {items.map((item) => (
        <DraggableItem
          key={item._id}
          item={item}
          onEdit={editItem}
          onDelete={deleteItem}
        />
      ))}
    </Box>
  );
};

export default DropArea;
