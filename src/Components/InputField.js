import React from 'react'

const InputField = ({value, setValue}) => {
  return (
    <input value={value} onChange={(e)=>setValue(e.target.value)}/>
  )
}

export default InputField