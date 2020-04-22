import React, {Component} from 'react';
//do it with your owne way #
const Weather =(props)=>{
    return(
        <div>
           {
           props.country&& <p className="info-key" >Countery:-
              <span className="info-value" >{ props.country}</span> 
               </p> 
           }
           {
           props.city&& <p className="info-key">City:-
               <span className="info-value" >{ props.city}</span> 
                </p>
           } 
           {
           props.temp&& <p className="info-key">Tempreature:-
               <span className="info-value" >{ props.temp}</span> 
               </p>
           } 
           {
           props.humidity&& <p className="info-key">Humidity:-
               <span className="info-value" >{ props.humidity}</span> 
                </p>
           }
           {
           props.description&& <p className="info-key">Description:-
               <span className="info-value" > { props.description}</span>
               </p>
           
           }
           {
               props.error&& <p className="info-key"> 
                <span className="info-value" >{props.error}</span> 
                </p>
           }
               
        </div>
    )

}
export default Weather;