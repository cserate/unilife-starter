import React from 'react'
import axios from 'axios'
import './SeeAllCities.css'
import Banner from '../../components/Banner/Banner'
import CityButtons from '../../components/CityButtons/CityButtons'
import Footer from '../../components/Footer/Footer'





function SeeAllCities() {
    const baseUrl = "https://unilife-server.herokuapp.com";

    //create state to hold cities
    const [cities, setCities] = React.useState([])
    
    React.useEffect(
      ()=>{
          //call api to get cities
          axios.get(`${baseUrl}/cities`)
          // https://unilife-server.herokuapp.com/cities
          .then (res =>{
            console.log(res.data.response);
            //store the data from the api into state
            setCities(res.data.response)
          })
          .catch(err => console.log(err))
    }, []
    )

  return (
    //figure out how to reuse the Banner but pass new data that I type in
    //the banner component works, but has the wrong text
    <div className='see-all-cities-page'>
        <Banner />
        
            <h3>Search by City</h3>
        
            <div className='city-buttons-container'>
                {cities.map(item=> <CityButtons     
                                                    city={item} />)}
            </div>
        
    </div>
  )
}

export default SeeAllCities