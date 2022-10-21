import { snapToGrid } from "../utils/snapToGrid";

export const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

export const getItemStyles = (initialOffset, currentOffset) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

  x -= initialOffset.x;
  y -= initialOffset.y;
  [x, y] = snapToGrid(x, y);
  x += initialOffset.x;
  y += initialOffset.y;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}
