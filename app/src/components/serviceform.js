import React,{useState} from 'react';
import Css from './serviceform.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Serviceform = (prop)=>{
const Navigate = useNavigate();
const [input, setinput] = useState({
    name: '',
    address: '',
    number: ''    
})

if(!prop.service){
    Navigate('/home');
}

const handleChange =(e)=>{
let name = e.target.name;
let value = e.target.value;

setinput({...input,[name]:value});

}
const [flag, setflag] = useState(true);
const Validate = ()=>{

    if(input.name.length  === 0 && input.address.length  === 0 && input.number.length === 0){
        setflag(false);
    } 
    else{
        setflag(true);
    }
}
    return<>
    <center>
        <form>
        <div className={Css.container}>
            <h2>'Provide the information below' for {prop.service}</h2>
            <br />
            <input onChange={handleChange} type="name" name='name' placeholder='Your Name' />
            <br />
            <input onChange={handleChange} type="text" name='address' placeholder='Address for repair'/>
            <br />
            <input onChange={handleChange} type="number" name='number' placeholder='Contact number' />
            <br />
            <button onClick={(event)=>{
                console.log(input.number.length)
                Validate()
                event.preventDefault();
                if(flag === true) { axios.post("/serviceform",input).then(res=>{alert(res.data.message);Navigate("/thank")})} 
                
                
                else{alert('something is wrong please fill the details again');}
                
            }
        }
                className={Css.btn}>Submit</button>
        </div>
        </form>
    </center>
    </>
}
export default Serviceform;