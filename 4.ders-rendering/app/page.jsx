import React from 'react'
import BtnUI from './BtnUI'
import InputUI from '@/components/InputUI'
import TestClient from './TestClient'

const HomePage = () => {
  console.log("HomePage")
  // ! App'in içinde her zaman serverSide'ta render edilir
  // ! anlamak içinde console yazında terminalde görünür.
  // ! dışarıda tanımlasam bile app dosyasında çağırdığım için gene serverda çalışıcak
  // ! ancak clientta kullanırsam bu durum artık serverda çalışmaz.
  // ! bunu önlemek için sade serverda çalışmasını sağlamak için
  // ! npm install server-only kurmam gerekir.
  // ! bu sayede clientte kullanamınca hata vericek.
  return (
    <div>
      <h1>HomePage</h1>
      <BtnUI/>
      <InputUI/>
      <TestClient/>
    </div>
  )
}

export default HomePage