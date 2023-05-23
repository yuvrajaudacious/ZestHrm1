import { Button, Card, Space, Table } from "antd";
import React, { useState, useRef } from "react";
import { ClockCircleOutlined, FieldTimeOutlined } from "@ant-design/icons";
import Styles from "./style.module.css";
const StopWatch = () => {
  const [disable, setDisable] = useState(0);
  const [times, setTimes] = useState(0);
  const time = () => {
    const currentdate = new Date();
    const timenow =
      +currentdate.getHours() + ":" + currentdate.getMinutes() + "";
    setTimes(timenow);
    console.log(timenow);
  };

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setDisable(true);
    setTimeout(() => setDisable(false), 0x01fffffff);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
    setDisable(1);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`;
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`;
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  const dataSource = [
    {
      key: "1",
      name: `${times}`,
      age: `${times}`,
      address: `${times}`,
    },
    {
      key: "2",
      name: `${times}`,
      age: `${times}`,
      address: `${times}`,
    },
  ];
  const columns = [
    {
      title: "Start Time",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Out Time",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Break Time",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div className={Styles.bg}>
      <div className={Styles.text}>
        <h1>
          TimeSheet <FieldTimeOutlined />
        </h1>
      </div>
      {/* <div className="">

          <b>{formatTime()}</b>
      </div> */}

      <Card hoverable className={Styles.Card1}>
        <Button
          type="primary"
          onClick={() => {
            handleStart();
            time();
          }}
          disabled={disable}
        >
          <ClockCircleOutlined />
          Clock In
        </Button>

        {/* <p>ed{times}</p> */}

        <Button
          type="primary"
          onClick={() => {
            handlePause();
            time();
          }}
        >
          Clock Out
        </Button>
      </Card>

      <Card hoverable className={Styles.Card2}>
        <Button
          type="primary"
          onClick={() => {
            handleStart();
            time();
          }}
          disabled={disable}
        >
          <ClockCircleOutlined /> Break In
        </Button>

        {/* <p>ed{times}</p> */}

        <Button
          type="primary"
          onClick={() => {
            handlePause();
            time();
          }}
        >
          Break Out{" "}
        </Button>
      </Card>
      <div className={Styles.timercard}>
        <Card hoverable className={Styles.total}>
          <div>
            <h1>
              Timer
              <p>{formatTime()}</p>
            </h1>
          </div>
        </Card>
        <Card hoverable className={Styles.Break}>
          <div>
            <h1>
              Break Timer
              <p>{formatTime()}</p>
            </h1>
          </div>
        </Card>
          <div className={Styles.Totaltime}>
            <h1>
              Total Time
              <p>{formatTime()}</p>
            </h1>
          </div>{" "}
      </div>

      <div className={Styles.table}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default StopWatch;
