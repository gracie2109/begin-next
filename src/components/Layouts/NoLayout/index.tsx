import React from 'react'

type Props = {
  children:any
}

const NoLayout = ({children}: Props) => {
  return (
    <div className="mx-auto container relative top-0 my-7">
        {children}
    </div>
  )
}

export default NoLayout