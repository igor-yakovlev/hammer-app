import { useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types/ItemTypes.js";
import { snapToGrid } from "../utils/snapToGrid.js";
import styles from "./Container.module.css";
import { classes } from "../../../../../utils/functions";
import Box from "../Box/Box.jsx";
import { connect } from "react-redux";
import { updateItem } from "redux/actions/Planner";

const Container = ({ checked, planner, updateItem }) => {
  const moveBox = useCallback(
    (id, left, top) => {
      updateItem({ id, left, top });
    },
    [updateItem]
  );

  const [, drop] = useDrop(
    () => ({
      accept: Object.values(ItemTypes),
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        [left, top] = snapToGrid(left, top);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div
      ref={drop}
      className={classes(styles.container, checked && styles.grid)}
    >
      {Object.keys(planner).map((key) => (
        <Box key={key} id={key} {...planner[key]} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  updateItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
