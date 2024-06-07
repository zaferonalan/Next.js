import Link from 'next/link'
import React from 'react'

const LinkBasic = () => {
  return (
    <div className='content'>
        <h3>replace</h3>
        <Link href={`./link/serach=${Math.random()}`} >Link: query değişir</Link>
        <Link href={`/link/?search=${Math.random()}`} replace={true} >
            Link: query degistir, 'replace: true'
        </Link>
    </div>
  )
}

export default LinkBasic