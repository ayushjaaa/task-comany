import React, { useState } from 'react'
import FormWrapper from '../FormWrapper/FormWrapper'
import axios from "axios"
import { useParams ,useNavigate} from 'react-router-dom'
import '../ComanayForm/form.css'
const inputs = [{
    type: "text",
    label: "ReviewerName",
    placeholder: "Enter your ReviewerName",
    value: "",
    id: "ReviewerName",
    name: "ReviewerName",
    error: '',
    disabled: false,
    readonly: false,
    required: true
},
{
    type: "text",
    label: "subject",
    placeholder: "Enter your  subject",
    value: "",
    id: "subject",
    name: "subject",
    error: '',
    disabled: false,
    readonly: false
},
{
    type: "text",
    label: "reviewtext",
    placeholder: "Enter your  reviewtext",
    value: "",
    id: "reviewtext",
    name: "reviewtext",
    error: '',
    disabled: false,
    readonly: false
},

{
    type: "Number",
    label: "Enter ratings for comany",
    value: "",
    id: "ratings",
    name: "ratings",
    error: '',
    checked: false,
    disabled: false,
    readonly: false,

},
{
    type: "checkbox",
    label: "Accept Terms and Conditions",
    value: "",
    id: "accept_terms",
    name: "accept_terms",
    error: '',
    checked: false,
    disabled: false,
    readonly: false,

}
]
const ReviewForm = () => {
const navigate = useNavigate()
    const {id} = useParams()
    const [Inputs, setInputs] = useState(structuredClone(inputs))

//     const callApi = async(params)=>{
// try{
//     const respone = axios.post("/api/company/addcompany",{
//         params
//     })
// }catch(error){
//     console.log(error)
// }
//     }

    //Updation Funtion //
    function onInputChange({ id, index, value, checked, type,label}) {
        const oldState = structuredClone(Inputs)
        if (type === "checkbox") {
            console.log(checked)
            oldState[index].checked = checked
        }
        else {
            oldState[index].value = value
        }
        setInputs(oldState)


        oldState[index].error = ""
        setInputs(oldState)
    }



    function onInputBlur({ id, index, value, checked, type,lable}) {
        console.log(lable)
        const oldState = structuredClone(Inputs)
        if (type === "text") {
            if (value.length < 3) {
                oldState[index].error = `Invalid feild ${oldState[index].name}`
            }
        }
        setInputs(oldState)
    }

    const onsubmit = async() => {
        const params = {}
        Inputs.map((input) => {
            if (input.type === "checkbox") {
                if (input.checked) {
                    params[input.name] = input.value
                }

            }
            else {
                params[input.name] = input.value
            }
    
        })


try{
    const respone =  await axios.post(`http://localhost:3000/api/reviews/${id}/Reviews`,params)
    navigate('/')

}
catch(error){
    console.log(error)
}
   
   
}


    const needToDisabelsubmt = () => {
        let disable = false
        for (let input of Inputs) {
            if (input.required && !input.value) {
                disable = true
                break
            }
        }
        return disable
    }

    const disableSubmit = needToDisabelsubmt()

    const oncancle = () => {
        setInputs(structuredClone(inputs))
    }

    return (
        <div>
            <div><h1>Add Review Form</h1></div>
            <FormWrapper Inputs={Inputs} disableSubmit={disableSubmit} onInputChange={onInputChange} onBlur={onInputBlur} onsubmit={onsubmit} oncancle={oncancle} />
        </div>
    )
}

export default ReviewForm
