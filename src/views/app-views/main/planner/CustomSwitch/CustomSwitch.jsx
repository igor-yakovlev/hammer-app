import { Space, Switch } from "antd";
import React from "react";

const CustomSwitch = ({ onChange }) => {
  return (
    <Space size={8}>
      <span>Сетка</span>
      <Switch defaultChecked onChange={onChange} />
    </Space>
  );
};

export default CustomSwitch;
