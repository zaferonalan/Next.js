import Test from '@/components/Test'
import React from 'react'
import styles from './homepage.moduls.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HomePage</h1>
      <Test/>
    </div>
  )
}

export default HomePage