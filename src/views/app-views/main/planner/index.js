import React, {useState} from 'react'
import {Card, Col, Row} from "antd";
import MapDesk from "./MapDesk";

const Planner = () => {
	const [activeTabKey2, setActiveTabKey2] = useState('tables');
	const tabListNoTitle = [
		{
			key: 'tables',
			tab: 'Новые столы',
		},
		{
			key: 'elements',
			tab: 'Новые элементы',
		},
		{
			key: 'custom',
			tab: 'Custom',
		},
	];

	const contentListNoTitle = {
		tables: <p>article content</p>,
		elements: <p>app content</p>,
		custom: <p>project content</p>,
	};

	const onTab2Change = (key) => {
		setActiveTabKey2(key);
	};

	return (
		<div>
			<Row gutter={25}>
				<Col span={12}>
					<Card
						style={{borderRadius: '10px'}}
						tabList={tabListNoTitle}
						activeTabKey={activeTabKey2}
						onTabChange={(key) => onTab2Change(key)}
					>
						{contentListNoTitle[activeTabKey2]}
					</Card>
				</Col>
				<Col span={12}>
					<MapDesk/>
				</Col>
			</Row>
		</div>
	)
}

export default Planner
