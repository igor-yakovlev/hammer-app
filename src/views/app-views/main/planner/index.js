import React, { useState } from "react";
import { Button, Card, Col, Row, Space } from "antd";
import MapCard from "./MapCard/MapCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { connect } from "react-redux";
import { addItem, importItems } from "redux/actions/Planner";
import CustomFileInput from "./CustomFileInput/CustomFileInput";
import { contentList, tabList } from "./tableConfig";

const Planner = ({ addItem, importItems, planner }) => {
  const [activeTabKey, setActiveTabKey] = useState("tables");

  const handleImport = (event) => {
    const reader = new FileReader();
    reader.onload = function () {
      const parsed = JSON.parse(reader.result);
      importItems(parsed);
    };
    reader.onerror = function () {
      console.log("Error");
    };
    event.target.files[0] && reader.readAsText(event.target.files[0]);
  };

  const handleDownload = () => {
    const content = JSON.stringify(planner);
    const a = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "planner.json";
    a.click();
  };

  const handleAddItem = ({ type, src }) => {
    addItem({ [`${Date.now()}`]: { top: 0, left: 0, type, src } });
  };

  const onTab2Change = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Row gutter={25}>
          <Col lg={12}>
            <Card
              style={{ borderRadius: "10px" }}
              tabList={tabList}
              activeTabKey={activeTabKey}
              onTabChange={(key) => onTab2Change(key)}
            >
              {contentList(handleAddItem)[activeTabKey]}
            </Card>
            <Card>
              <Space lg={8}>
                <CustomFileInput onChange={handleImport} />
                <Button onClick={handleDownload}>Export</Button>
              </Space>
            </Card>
          </Col>
          <Col lg={12}>
            <MapCard />
          </Col>
        </Row>
      </DndProvider>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { addItem, importItems };

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
