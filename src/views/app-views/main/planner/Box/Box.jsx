import { memo, useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { connect } from "react-redux";
import { ItemPics } from "../types/ItemTypes";
import { deleteItem } from "redux/actions/Planner";
import { getStyles } from "./config";

const Box = memo(function Box({ id, left, top, type, deleteItem }) {
  const src = ItemPics[type];
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        elem: monitor.getItem(),
      }),
      end(item, monitor) {
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          deleteItem(item.id);
        }
      },
    }),
    [id, left, top]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div className="box" ref={drag} style={getStyles(left, top, isDragging)}>
      <img src={src} alt={type} style={{ width: "100%" }} />
    </div>
  );
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = { deleteItem };

export default connect(mapStateToProps, mapDispatchToProps)(Box);
