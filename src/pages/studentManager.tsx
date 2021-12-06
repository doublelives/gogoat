import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { Card, Descriptions, Table } from "antd";
import { useNavigate } from "react-router";

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const StudentManager = () => {
  const nav = useNavigate();
  return (
    <Descriptions title="学生管理">
      <Table dataSource={dataSource} columns={columns} />
    </Descriptions>
  );
};

export default StudentManager;