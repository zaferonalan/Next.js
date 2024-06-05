"use client";
import React, { useEffect, useState } from 'react'

const TestClient = () => {
    const [message, setMessage] = useState("initial")
  useEffect(() => {
    console.log("useEffect")
  },[])
  console.log("TestClient")
    
  return (
    <div>
        TestClient
        {message}
    </div>
  )
}

export default TestClient