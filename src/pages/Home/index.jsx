import React, { useEffect } from 'react'
import styles from "./index.module.scss"

import Header from '../../components/Header'
import Login from '../../components/Login'

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

export default function Home() {

  const login = useSelector(state => state.login.value);
  const navigation = useNavigate()

  useEffect(() => {
    if (login) {
      navigation("/profile")
    }
  }, [login, navigation])

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles["home__main"]}>
        <Login />
      </div>
    </div>
  )
}
