import React from 'react'

import Loading from '@/components/loading'
import style from "./style.module.css"

const FeatureMovieLoading = () => {
  return (
    <div style={{height: 278}} 
        className={`flex items-center justify-center bg-black/[0.75] border-solid border border-[#333] 
            shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] w-full h-full rounded-[6px] font-[700] ${style}`}
    >
        <Loading />
    </div>
  )
}

export default FeatureMovieLoading