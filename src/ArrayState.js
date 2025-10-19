import {useState} from "react";

let counter = 4; 
export default function ArrayState(){


    const[inputValue, setInputValue] = useState("")
    const [devices, setDevices] = useState([
        {id: 1, name:"OPPO"},
        {id: 2, name:"Samsung"},
        {id: 3, name:"fd"},
        {id: 4, name:"x"},
        {id: 5, name:"u"},
    ]);



    
    //deleting with array
    function handleRemoveClick(id){
        const newArray = devices.filter((device)=> {
         return device.id !== id;  
        })


        setDevices(newArray)
    
    }



    //adding with array 
    function handleAddClick(){

        setDevices([...devices, {id:counter, name:inputValue}])
        counter= counter+1;
    }

    //update with array 
    function handleUpdateClick(id){
        const newArray = devices.map((device)=>{
            if(device.id == id){
               let newDevice = {...device, name:device.name+"0"}
                return newDevice
            }
            else return device
        } )
        

        setDevices(newArray)
    
    }


const deviceList = devices.map((device)=>{
    return(
    <>
        <li key={device.id}>
            {device.name}
            <button onClick={()=>{  handleUpdateClick(device.id)}}>Update</button>
            <button onClick={()=>{  handleRemoveClick(device.id)}}>remove</button>
        </li>
    </>

    )
})
    return(
        <div>
           {deviceList}

           <input value={inputValue}
                  onChange={(e)=>{setInputValue(e.target.value)}}
           />
           <button onClick={handleAddClick}>add</button>
        </div>
    )
}