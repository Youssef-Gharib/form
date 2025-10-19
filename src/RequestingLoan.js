import Message from './Message';
import './RequestingLoan.css';
import { useState } from 'react';

export default function RequestingLoan() {
const [errorMessage, setErrorMessage] = useState(null)
const [btnSubmit, setBtnSubmit]= useState(false)
const [inputValue, setInputValue] = useState({
    name:"",
    phone:"",
    age:"",
    isEmployee:false,
    salary:"" ,
}); 
function handleSubmitbtn(e){
    const {age} = inputValue; 

    setErrorMessage(null)
    e.preventDefault();
    if(inputValue.phone.length > 12 || inputValue.phone.length < 11){
        setErrorMessage("The phone number is not correct")
    }
    else if(age < 16 || age > 100){
        setErrorMessage("Ege is not allowed")
    }
    
    setBtnSubmit(true);
}
function handleShowModel(){
    setBtnSubmit(false)
}

    return (
        <div> 
            <div className='container'> 
                <form onSubmit={(e)=> e.preventDefault()}>
                    <h1>Requesting a Loan</h1>
                    <div>
                        <label>Name:</label>
                        <input value={inputValue.name} onChange={(e)=> setInputValue({...inputValue, name:e.target.value})}></input>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input value={inputValue.phone } onChange={(e)=> setInputValue({...inputValue, phone:e.target.value})}></input>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input value={inputValue.age} onChange={(e)=> setInputValue({...inputValue, age:e.target.value})}></input>
                    </div>
                    <div className='checkbox'>
                        <label>Are you an employee:</label>
                        <input value={inputValue.isEmployee} onChange={(e)=> setInputValue({...inputValue, isEmployee:e.target.checked})} type='checkbox'></input>
                    </div>
                    <div>
                        <label>Salary:</label>
                        <select value={inputValue.salary} onChange={(e)=> setInputValue({...inputValue, salary:e.target.value})} >
                            <option value="" disabled>--choose range--</option>
                            <option>5000-10000</option>
                            <option>11000-15000</option>
                        </select>
                    </div>
                    <button  
                        disabled= {!(inputValue.name !== "" 
                                    &&  inputValue.phone !== "" 
                                    && inputValue.age !== ""&& 
                                    inputValue.salary !== ""
                                    )}
                        onClick={handleSubmitbtn}           
                                    >
                        
                        Submit
                    </button>
                </form>
            </div>
           {btnSubmit  && <Message errorMessage={errorMessage} onClick={handleShowModel}/>}
        </div> 
    )
}
