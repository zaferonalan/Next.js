import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-full min-w-full flex items-center justify-center">
        <div className="inline-block w-[50px] h-[50px] border-solid border-[3px] border-gray-50/[0.3] rounded-[50%] border-t-[#fff] animate-spin "></div>
    </div>
  )
}

export default Loading