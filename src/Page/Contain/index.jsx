import React from "react";
import Styles from "./style.module.css"
import { Button, Space } from "antd";
const Contain = () => {
  return (
    <div>
      <div className={Styles.BG}>
        <div className={Styles.Color}>
          <img className={Styles.logo} src="zestlogo.png" />
          <p className={Styles.h6}> JOIN OUR MARKETPLACE</p>
          <h1 className={Styles.h1}>COMPANY</h1>
          <p className={Styles.p}>
            The next generation soical network & community!<br></br>
            Connect with your friends and play with our quests and <br></br>
            badges gamification system!
          </p>

          <div className={Styles.btn}>
          <Space
              direction="horizontal"

    style={{
      width: '100%',
    }}
  >
          <Button className={Styles.bttn} type="primary" >
      Login
    </Button>
    <Button className={Styles.bttn} type="primary" >
Signup    </Button>
              </Space>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Contain;
