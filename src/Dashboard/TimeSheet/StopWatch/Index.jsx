import { Button, Space } from "antd";
import React, { useState, useRef } from "react";
import Styles from "./styles.module.css";
import {
  ClockCircleOutlined
} from "@ant-design/icons";
// import Styles from "./styles.module.css";

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

  return (
    <>
    <div className={Styles.bttn}>
      <div className={Styles.time}>

          <b>{formatTime()}</b>
      </div>
       
      <div className="">
        <Button
          type="primary"
          onClick={() => {
            handleStart();
            time();
          }}
          disabled={disable}
        ><ClockCircleOutlined />
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
      </div>

      {/* <p> </p>
        <button className="btn btn-dark" onClick={time}>
          Clock Out
        </button>  */}  

    </div>
    <div className={Styles.btn}>
      <div className={Styles.time}>
        <b></b>
          <b>{formatTime()}</b>
      </div>
      <Space>
       
      <div className={Styles.bbb}>
        <Button

          type="primary"
          onClick={() => {
            handleStart();
            time();
          }}
          disabled={disable}
        >
<ClockCircleOutlined />           Break In
        </Button>

        {/* <p>ed{times}</p> */}

        <Button
          type="primary"
          onClick={() => {
            handlePause();
            time();
          }}
        >
Break Out        </Button>
      </div>
        </Space>
      </div>
    </>
  );
};

export default StopWatch;
