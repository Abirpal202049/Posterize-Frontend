import React from 'react'

const ContainerLayout = ({children}) => {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
        {children}
    </div>
  )
}

export default ContainerLayout