import React from "react";
import { Card } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import CustomDragLayer from "../CustomDragLayer/CustomDragLayer";
import Container from "../Container/Container";
import CustomSwitch from "../CustomSwitch/CustomSwitch";

const MapCard = () => {
  const [checked, setIsChecked] = useState(true);
  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <Card
      extra={<CustomSwitch onChange={handleChange} />}
      title={"Карта заведения"}
      headStyle={{ color: "white" }}
      style={{ backgroundColor: "#131313", width: '570px', height: '500px' }}
    >
      <DndProvider backend={HTML5Backend}>
        <Container checked={checked} />
        <CustomDragLayer />
      </DndProvider>
    </Card>
  );
};

export default MapCard;
