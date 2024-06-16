// src/App.js
import React, { useState, useEffect } from "react";
import { Box, Flex, Input, Button, Divider } from "@chakra-ui/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import DropArea from "./components/DropArea";
import ItemInput from "./components/ItemInput";

const ItemType = "ITEM";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItemContent, setNewItemContent] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/api/items");
    setItems(response.data);
  };

  const addItem = async () => {
    const response = await axios.post("http://localhost:5000/api/items", {
      content: newItemContent,
      position: { x: 0, y: 0 },
    });
    setItems([...items, response.data]);
    setNewItemContent("");
  };

  const updateItemPosition = async (id, position) => {
    await axios.put(`http://localhost:5000/api/items/${id}`, { position });
    fetchItems();
  };

  const editItem = async (id) => {
    const newContent = prompt("Enter new content:");
    if (newContent) {
      await axios.put(`http://localhost:5000/api/items/${id}`, {
        content: newContent,
      });
      fetchItems();
    }
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Flex>
          <Box width="40%">
            <Flex gap="5px">
              
              <ItemInput
                newItemContent={newItemContent}
                setNewItemContent={setNewItemContent}
                addItem={addItem}
              />
            </Flex>
          </Box>

          <Box width="60%">
            <DropArea
              items={items}
              updateItemPosition={updateItemPosition}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          </Box>
        </Flex>
      </Box>
    </DndProvider>
  );
};

export default App;
