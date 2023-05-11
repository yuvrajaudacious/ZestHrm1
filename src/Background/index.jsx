import React from 'react'
import Styles from "./style.module.css"
import Login from '../Page/Login/Index'
import Contain from '../Page/Contain'
import Varicode from '../Page/Validation/Varifaction/Index'
const Home = () => {
  return (
    <div className={Styles.Bg}>
      <Contain/>
      <Login/>
    </div>
  )
}

export default Home
