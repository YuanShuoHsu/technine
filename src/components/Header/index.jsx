import React from 'react'
import DropdownMenu from '../DropdownMenu'
import styles from "./index.module.scss"

import { Link } from "react-router-dom"

import technine from "./../../images/technine.png"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles["header__container"]}>
                <Link className={styles["header__link"]} to={"https://technine.io/zh_hant/"}>
                    <img className={styles.logo} src={technine} alt="technine" />
                </Link>
            </div>
            <DropdownMenu />
        </div>
    )
}
