import { List } from "antd";
import React from "react";

export const ImageList = ({ data, onClick }) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item onClick={() => onClick(item)}>
          <img
            style={{ maxWidth: 70, borderRadius: "1rem" }}
            src={item.src}
            alt={item.alt}
          />
        </List.Item>
      )}
    />
  );
};
