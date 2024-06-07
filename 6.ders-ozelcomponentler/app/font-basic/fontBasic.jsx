import React from 'react'
import { Inter, Open_Sans } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] })
const openSansFont = Open_Sans({ subsets: ["latin"] })

const fontBasic = () => {
  return (
    <div>
        <h3>Google Font kullanimi</h3>
        <p className={interFont.className} >
            Bu yazi tipi Inter
        </p>
        <p className={openSansFont.className}>
            Bu yazi tipi Open Sans
        </p>
        <h3>Local Font Kullanımı</h3>
    </div>
  )
}

export default fontBasic