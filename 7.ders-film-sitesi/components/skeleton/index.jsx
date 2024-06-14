import React from 'react'
import style from "./style.module.css"

const Skeleton = ({ width, height }) => {
  return (
    <div className={style.skeleton} style={{width, height}}></div>
  )
}

export default Skeleton