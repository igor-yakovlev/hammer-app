import React from 'react';
import {Card, Switch} from 'antd';

const MapDesk = ({}) => {
  return (
    <Card
      extra={<Switch/>}
      title={'Карта заведения'}
      headStyle={{color: 'white'}}
    >
    </Card>
  )
}

export default MapDesk;
