import React from 'react'
import Image from 'next/image'
import OrnekResim from '../../assets/araba.jpg'

const ImageDetay = () => {
    const ImageLoader = ({src, width, height, ...rest}) => {
        return `${src}?q=75`
    }
  return (
    <div className="content">
      <h2>Dikkat</h2>

      <h3>Detaylı Kullanım</h3>
      <p>quality=10 kullanarak</p>
      <Image
        src="https://picsum.photos/400/200"
        alt='Açıklayıcı bir alt Attribute'
        width={400}
        height={200}
        quality={10}
      />
      <p>placeholder=blur kullanarak</p>
      <Image
        src={OrnekResim}
        alt='Açıklayıcı bir alt Attribute'
        placeholder='blur'
      />
      <p>
        'onLoadingComplete ile resim yüklenip,
        'placeholder'in kaltigini yakalamak
      </p>
      <Image
        src={OrnekResim}
        alt='Açıklayıcı bir alt Attribute'
        onLoadingComplete={(e) => 
            console.log("Resim yüklendi, placeholder komple kaldırıldı", e)
        }
      />
      <p>'onload' ile resim yüklendigini yakalamak:</p>
      <Image
        src={OrnekResim}
        alt='Açıklayıcı bir alt Attribute'
        onLoad={(e) => 
            console.log("Resim yüklendi, placeholderkalkmamıs olabilir!",e)
        }
      />
      <p>'onError' ile resim yüklenirken bir hata olustugunu yakalamak:</p>
      <Image
        src="https://picsum.photos/assasdas"
        alt='Açıklayıcı bir alt Attribute'
        width={400}
        height={200}
        onError={(e) => console.log("Resim yüklenemedi",e)}
      />
      <p>Custom resim loader:</p>
      <Image
        src="https://picsum.photos/400/200"
        alt='Açıklayıcı bir alt Attribute'
        width={400}
        height={200}
        loader={ImageLoader}
      />
      <p>unoptimized ile butun optimizasyonlardan vazgeçmek</p>
      <Image
        src="https://picsum.photos/400/200"
        alt='Açıklayıcı bir alt Attribute'
        width={400}
        height={200}
        unoptimized
      />
    </div>
  )
}

export default ImageDetay