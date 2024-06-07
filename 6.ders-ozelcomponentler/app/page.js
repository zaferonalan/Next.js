"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import LinkBasic from './Link/LinkBasic'

const HomePage = () => {
  const [dynamicParam, setDynamicParam] = useState("")
  return (
    <div className="container">
      <ol className="notes">
          <h2>Dikkat!</h2>
          <li>
              <p>Dinamik URL'lerde 'href' object olarak verilmiyor</p>
          </li>
      </ol>

      <h3>Basit Kullanim</h3>
      <Link href="/about" >About Sayfası</Link>
      <Link href="/about?search=elma">About Sayfası: query ile</Link>
      <Link href={{pathname: "/about", query: {search: "elma"}}}>About Sayfası 'href' object olarak</Link>
      <Link href="/blog/elma">Blog sayfası: 'elma' parametresi ile</Link>
      <input
          onChange={(e) => setDynamicParam(e.target.value)}
          placeholder='Nereye gidelim?'
      />
      <Link href={`/blog/${dynamicParam}`} >
          Blog Sayfasi: dinamik parametre ile
      </Link>
      <LinkBasic/>
      
    </div>
  )
}

export default HomePage