import React, { useState, useEffect, useRef } from 'react'
import styles from "./index.module.scss"

import { useTranslation } from 'react-i18next';

export default function DropdownMenu() {

  const { i18n } = useTranslation()
  const [languages, setLanguages] = useState([])

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(localStorage.getItem("i18nextLng").slice(0, 2));

  useEffect(() => {
    i18n.changeLanguage(selectedOption)
    const resources = i18n.services.resourceStore.data
    setLanguages(Object.keys(resources))
  }, [i18n, selectedOption])

  const renderOption = option => {
    switch (option) {
      case "zh":
        return "中文"
      case "en":
        return "English"
      default:
        return
    }
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleOptionClick = option => {
    setIsOpen(false);
    setSelectedOption(option);
    i18n.changeLanguage(option)
  }

  return (
    <div className={styles["dropdown-menu"]} ref={dropdownRef}>
      <button className={styles["dropdown-menu__toggle"]} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles["dropdown-menu__toggle-label"]}>{renderOption(selectedOption)}</span>
        <div className={styles["dropdown-menu__toggle-icon"]}>
          <svg className={`${styles.caret} ${isOpen ? `${styles.active}` : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <ul className={styles["dropdown-menu__list"]}>
          {languages.map(option => (
            <li
              key={option}
              className={`${styles["dropdown-menu__list-item"]} ${option === selectedOption ? `${styles.active}` : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {renderOption(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
