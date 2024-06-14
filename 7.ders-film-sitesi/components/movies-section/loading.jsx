import React from 'react'

import Skeleton from '@/components/skeleton'
import style from "./style.module.css"

const MoviesSectionLoading = () => {
  return (
    <div className={style.}>
        <Skeleton width={128} height={36} />
        <div className="">
            {Array(5)
                .fill(null)
                .map((_,index) => (
                    <Skeleton key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default MoviesSectionLoading