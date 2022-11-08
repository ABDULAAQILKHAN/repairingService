import React,{useState} from 'react';
import CardCss from './Card.module.css'
import data from './data.json';
import { useNavigate } from 'react-router-dom';

const Home = ({setservice}) =>{
    const [input, setinput] = useState('');

    const Navigate = useNavigate();
    const handleChange = (e)=>{
      setinput(e.target.value);
      console.log(e.target.value)
    }
  
    let dataFilter = data.filter(item=>{
      return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(input.toString().toLowerCase()))
    });


    return<>
     <center>
      <div className={CardCss.container}>
    <h1>Welcome to "title" repairing site .</h1>
    <h2>'Start by searching your first repair'</h2>
<br/>
    <input className={CardCss.search} 
    placeholder="Search: Available services" 
    value={input} onChange={handleChange}/>
    <button 
    className={CardCss.button}><i className="fa-solid fa-magnifying-glass"></i></button>


  <div className={CardCss.cardContainer}>
  {dataFilter.map((item,i)=>{
        let style = {
          backgroundImage: "url("+item.image+")",
          marginTop: '0%',
          height: '100%',
          width: '100%',
          position: 'static'
      }
  return(<>
        <center>
        <div onClick={()=>{ setservice(item.serviceName); Navigate("/serviceform")}} className={CardCss.Card}>
        <div style={style} className={CardCss.image}>

        <h1>{item.serviceName}</h1>

        </div>
        </div>
        </center>
  </>
  )
})}
 </div>
 </div>
</center>
    </>



}
export default Home;