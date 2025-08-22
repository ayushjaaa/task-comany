import React, { useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";


const initialInputs = [
  {
    type: "text",
    label: "CompanyName",
    placeholder: "Enter your CompanyName",
    value: "",
    id: "CompanyName",
    name: "CompanyName",
    error: "",
    required: true,
  },
  {
    type: "text",
    label: "location",
    placeholder: "Enter your location",
    value: "",
    id: "location",
    name: "location",
    error: "",
    required: true,
  },
  {
    type: "date",
    label: "foundedOn",
    placeholder: "Enter founded date",
    value: "",
    id: "foundedOn",
    name: "foundedOn",
    error: "",
    required: true,
  },
  {
    type: "text",
    label: "city",
    placeholder: "Enter your city",
    value: "",
    id: "city",
    name: "city",
    error: "",
    required: true,
  },
  {
    type: "text",
    label: "description",
    placeholder: "Enter your description",
    value: "",
    id: "description",
    name: "description",
    error: "",
    required: true,
  },
  {
    type: "text",
    label: "logo",
    placeholder: "Enter your logo URL",
    value: "",
    id: "logo",
    name: "logo",
    error: "",
    required: false,
  },
  {
    type: "checkbox",
    label: "Accept Terms and Conditions",
    value: "",
    id: "accept_terms",
    name: "accept_terms",
    error: "",
    checked: false,
    required: true,
  },
];


const validationRules = {
  CompanyName: { required: true, min: 3, max: 15, regex: /^[\w\s]+$/ },
  location: { required: true, min: 3, max: 15, regex: /^[a-zA-Z\s]+$/ },
  foundedOn: { required: true, type: "date", maxDate: new Date() },
  city: { required: true, min: 2 },
  description: { required: true, min: 12, max: 200 },
  logo: { required: false },
  accept_terms: { required: true, type: "checkbox" },
};


const validateField = ({ name, value, type, checked }) => {
  const rules = validationRules[name];
  let error = "";

  if (!rules) return error;

  if (rules.required) {
    if (type === "checkbox" && !checked) error = "You must accept the terms";
    else if (!value || value.toString().trim() === "")
      error = `${name} is required`;
  }

  if (!error && rules.min && value.length < rules.min)
    error = `${name} must be at least ${rules.min} characters`;

  if (!error && rules.max && value.length > rules.max)
    error = `${name} must be less than ${rules.max} characters`;

  if (!error && rules.regex && !rules.regex.test(value))
    error = `${name} contains invalid characters`;

  if (!error && rules.type === "date") {
    const dateValue = new Date(value);
    if (isNaN(dateValue)) error = `${name} must be a valid date`;
    else if (rules.maxDate && dateValue > rules.maxDate)
      error = `${name} cannot be in the future`;
  }

  return error;
};

const ComanayForm = () => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState(structuredClone(initialInputs));


  const onInputChange = ({ index, value, checked, type }) => {
    const oldState = structuredClone(Inputs);
    if (type === "checkbox") oldState[index].checked = checked;
    else oldState[index].value = value;


    oldState[index].error = "";
    setInputs(oldState);
  };

 
  const onInputBlur = ({ index, value, checked, type, label }) => {
    const oldState = structuredClone(Inputs);
    oldState[index].error = validateField({ name: label, value, type, checked });
    setInputs(oldState);
  };


  const disableSubmit = Inputs.some(
    (input) =>
      (input.required && (!input.value && !input.checked)) || input.error
  );


  const onsubmit = async () => {
    const params = {};
    Inputs.forEach((input) => {
      if (input.type === "checkbox") params[input.name] = input.checked;
      else params[input.name] = input.value;
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/company/addcompany",
        params
      );
      console.log(response)
      if (response.status === 200 || response.status === 201) {

        console.log("naviagtion")
        navigate("/");
      } else {
        console.log("Submission failed:", response.data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error while submitting:", error.response || error);
      alert(
        error.response?.data?.message || "Failed to submit. Please try again."
      );
    }
  };

 
  const oncancle = () => setInputs(structuredClone(initialInputs));

  return (
    <div>
      <h1>Add Company Form</h1>
      <FormWrapper
        Inputs={Inputs}
        disableSubmit={disableSubmit}
        onInputChange={onInputChange}
        onBlur={onInputBlur}
        onsubmit={onsubmit}
        oncancle={oncancle}
      />
    </div>
  );
};

export default ComanayForm;
