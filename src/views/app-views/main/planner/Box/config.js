export function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    display: "inline-block",
    width: 46,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
  };
}
