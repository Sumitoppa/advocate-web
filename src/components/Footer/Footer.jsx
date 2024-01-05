import React from 'react'
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
        <div className={`${styles.footer} p-3`}>
            Address:
            12 ABC Lane
        </div>
    </footer>
  )
}

export default Footer
