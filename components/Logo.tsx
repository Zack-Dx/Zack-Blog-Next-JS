import React from 'react'
import Image from 'next/image'
const Logo = (props:any) => {
    const {renderDefault, title} = props 
  return (

<div className='flex items-center justify-between'>
<Image className="rounded-full object-contain" height={50} width={50} src="https://avatars.githubusercontent.com/u/105835098?v=4" alt='logo'/>
<> {renderDefault(props)}</> 
</div>


  )
}

export default Logo