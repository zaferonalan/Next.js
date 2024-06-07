import Image from 'next/image'
import React from 'react'
import OrnekResim from '../../assets/araba.jpg'

const ImageBasic = () => {
  return (
    <div className="content">
      <h2>Dikkat</h2>

      <h3>Basit Kullanım</h3>
      <p>statik 'src'</p>
      <Image src={OrnekResim} alt='Açıklayıcı bir alt attribute' ></Image>
      <p>Internet üzerinden link ile 'src'</p>
      <Image
        src="https://picsum.photos/400/200"
        alt='Açıklayıcı bir alt Attribute'
        width={400}
        height={200}
      />
      <p>Internet üzerinden link 'fill=true':</p>
      <div style={{position: 'relative', width:"100%", height: "200px"}}>
        <Image 
          src="https://picsum.photos/400/200"
          alt='Açıklayıcı bir alt Attribute'
          fill
        />
      </div>
    </div>
  )
}

export default ImageBasic