import React from 'react'

const InputFeild = ({ Inputs,type,index,id,label,value,name,error,disabled,readonly,placeholder,onChange,required,onBlur}) => {
    // console.log(type,label,value,name,error,disabled,readonly)
 const {lable} = Inputs
 console.log(label)

const HndelCange = (event)=>{
// console.log(id)
onChange({value:event.target.value,index,id,type,label})
}


const handelBlur = (event)=>{
 onBlur({label,id,value:event.target.value,index,type})
}
  return (

<>
<div>
        
        <label htmlFor="">{label} {required && <sub>*</sub>} </label>
      <input type={type}   id={id} disabled={disabled} readOnly={readonly} value={value} placeholder={placeholder} name={name} onChange={HndelCange} onBlur={handelBlur}  />
      

    </div>
<div className='error-text '>{ error &&  <span>{error}</span> }</div></>
    
  )
}



export default InputFeild
