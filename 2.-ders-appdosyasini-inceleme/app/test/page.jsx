import React from 'react'

async function delay(ms){
  return new Promise((resolve) => setTimeout(resolve,ms))
}


async function TestPage() {
  await delay(3000)
  return (
    <div>TestPage</div>
  )
}

export default TestPage