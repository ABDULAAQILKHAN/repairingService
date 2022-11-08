import React,{useState} from "react";
import CardCss from './Card.module.css';

const Card = (prop) =>{

    let style = {
        backgroundImage: "url("+prop.image+")",
        marginTop: '0%',
        height: '100%',
        width: '100%',
        position: 'static'
    }

    const handleClick = (e) =>{

        setcardClick(e.target.name)
    }
    return<>

    <div>

        <div className={CardCss.Card} onClick={handleClick}>
        <div style={style} className={CardCss.image}>

        <h1>{prop.serviceName}</h1>
        <p>{prop.serviceDiscription}</p>

        </div>
        </div>
    </div>


    </>
}
export default Card;