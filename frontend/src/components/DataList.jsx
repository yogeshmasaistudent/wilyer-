// src/components/DataList.js
import React from "react";
import { Box } from "@chakra-ui/react";
import DraggableItem from "./DraggableItem";

const DataList = ({ items }) => {
  return (
    <Box
      width="50%"
      height="500px"
      // overflowY="auto"
      // borderRight="1px solid #ccc"
      border="1px solid red"
    >
      <h2>Data List</h2>
      {items
        .filter((item) => item.position.x === 0 && item.position.y === 0)
        .map((item) => (
          <DraggableItem key={item._id} item={item} />
        ))}
    </Box>
  );
};

export default DataList;
