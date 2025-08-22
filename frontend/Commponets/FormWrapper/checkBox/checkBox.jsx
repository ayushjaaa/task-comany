import React from 'react'

const CheckBox = ({type,id,index, label, value, name, error, disabled, readonly, placeholder, checked, onChange,onBlur }) => {
    const changeHandelr = () => {
        console.log(type)
        onChange({id,value,checked:!checked,index,type})
    }
    const handelBlur = (event)=>{
        onBlur({label,id,value:event.target.value,index,type})
    }
    return (
        <div>
            <input type={type} name={name} value={value} error={error} id={id} checked={checked} onChange={changeHandelr} />
            <label htmlFor={id}>{label}</label>
            <br></br>
            {!error && ( <span>{error}</span> )}
        </div>
    )
}

export default CheckBox
