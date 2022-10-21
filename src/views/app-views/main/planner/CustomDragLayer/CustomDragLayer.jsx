import { useDragLayer } from "react-dnd"; 
import Box from "../Box/Box.jsx";
import { getItemStyles, layerStyles } from "./config.js";

const CustomDragLayer = () => {
  const { itemType, isDragging, initialOffset, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  const renderItem = (type) => {
    return <Box type={type} />;
  }

  if (!isDragging) {
    return null;
  }
  
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem(itemType)}
      </div>
    </div>
  );
};

export default CustomDragLayer;
