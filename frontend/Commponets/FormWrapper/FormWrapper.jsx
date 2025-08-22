import InputFeild from "./inputFeild/InputFeild"
import CheckBox from "./checkBox/checkBox"
import '../ComanayForm/form.css'
const FormWrapper = ({Inputs,onInputChange,onsubmit,oncancle,disableSubmit,onBlur,lable}) => {

    console.log(Inputs)
    console.log(disableSubmit)
const osubmithandeler = (event)=>{
    event.preventDefault()   
    onsubmit()
}    
    return (
        <form className='form-Wrapper' onSubmit ={(event)=>osubmithandeler(event)}>
            {
                Inputs.map((input,index) => {
                    if (input.type === "checkbox") {
                        
                        return <CheckBox Inputs = {Inputs} index ={index} {...input} onChange={onInputChange} onBlur ={onBlur} />
                    }
    
                    return <InputFeild Inputs = {Inputs}  index ={index} {...input} onChange={onInputChange} onBlur={onBlur}/>
                    
                })


            }


<div>
    <button disabled={disableSubmit} type='submit'>submit</button>
    <button onClick={oncancle}>rest</button>
</div>
        </form>
    )
}

export default FormWrapper
