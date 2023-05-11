import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  Tiime: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Sr.No',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
  title: 'Clock In   ',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Break Time',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Clock Out',
    key: 'Tiime',
    dataIndex: 'Tiime',
 

  },
  {
    title: 'Totel Time',
    key: 'toteltime',
        dataIndex: 'toteltime',

    
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: "9:30",
    address: '1:00Hrs',
    Tiime: "6:30",
    toteltime: "8hrs"

  },
  {
    key: '2',
    name: 'Jim Green',
    age: "9:30",

    address: '1:00Hrs',
    Tiime: "6:30",
    toteltime: "8hrs"

  },
  {
    key: '3',
    name: 'Joe Black',
    age: '8:30',
    address: '1:00Hrs',
    Tiime: '6:30',
    toteltime: "8hrs"
  },
  {
    key: '4',
    name: 'Joe Black',
    age: '8:30',
    address: '1:00Hrs',
    Tiime: "6:30",
    toteltime: "8hrs"

  },
  {
    key: '5',
    
    name: 'Joe Black',
    age: "9:30",
    address: '1:00Hrs',
    Tiime: "6:30",
    toteltime: "8hrs"

  },
  {
    key: '6',
    avatar:"https://ca.slack-edge.com/T01TRSXL4NS-U03BAAA889Y-03a953eb03c3-512",
    name: 'Joe Black',
    age: "9:30",
    address: '1:00Hrs',
    Tiime: "6:30",
    toteltime: "8hrs"

  },
];

const Tale= () => <Table columns={columns} dataSource={data} />;

export default Tale;