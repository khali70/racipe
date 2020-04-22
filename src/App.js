import React,{Component} from 'react';
import Weather from './component/Weather';
import Form from './component/Form';
// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
const Api_key="9df152df05e017e9f63ed0c582bb3724"; 
class App extends Component {
  state={
    humidity:'',
    city:'',
    temp:'',
    country:'',
    discription:'',
    error:'',

  }
  getWeather= async(e)=>{
    e.preventDefault()
     const country=e.target.elements.country.value;
     const city=e.target.elements.city.value;
     const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`)
     const data= await api.json();
     console.log(data);
     console.log(data.weather[0].description);
    if(city&&country){
      this.setState({
        humidity: data.main.humidity,
        city: data.name,
        temp: data.main.temp,
        country: data.sys.country,
        description: data.weather[0].description,
        error: '',
        
       })
    }else{
      this.setState({
        humidity:'',
        city:'',
        temp:'',
        country:'',
        discription:'',
        error:'please Enter the correct data',
       })
    }
  }
 render(){
  return (
    <div className="warpper">
     <div className="form-container">
     <Form getWeather={this.getWeather} />
      <Weather
      humidity    ={ this.state.humidity}  
      city        ={ this.state.city}
      temp        ={ this.state.temp} 
      country     ={ this.state.country} 
      description ={ this.state.description} 
      error       ={ this.state.error}
  
      />
     </div>
    </div>
  )
 }
}

export default App;
;