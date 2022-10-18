import React, {Component} from 'react'
import {Card, Table, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, UserOutlined} from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import UserService from 'services/UserService';
import {withRouter} from "react-router";

export class ClientsList extends Component {

    state = {
        users: [],
        isLoading: true,
    }

    componentDidMount() {
        UserService.getUsers()
            .then(data => this.setState({users: data, isLoading: false}))
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    routingFunction = (param) => {
        this.props.history.push(`/app/main/clients/list/${param}`);
    }

    render() {
        const {users, userProfileVisible, selectedUser} = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus icon={<UserOutlined/>} src={record.img} name={record.name}
                                      subTitle={record.email}/>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Company',
                dataIndex: 'company',
                render: company => (
                    <span>{company.name}</span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.company.name.toLowerCase();
                        b = b.company.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'City',
                dataIndex: 'address',
                render: address => (
                    <span>{address.city}</span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.address.city.toLowerCase();
                        b = b.address.city.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                                this.routingFunction(elm.id)
                            }} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined/>} onClick={() => {
                                this.deleteUser(elm.id)
                            }} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>
                <Table loading={this.state.isLoading} columns={tableColumns} dataSource={users} rowKey='id'/>
            </Card>
        )
    }
}

const ClientsListWithRouter = withRouter(ClientsList);

export default ClientsListWithRouter
