import axios from 'axios';
import React from 'react'
import Banner from '../../components/Banner/Banner'
import CityCard from '../../components/CityCard/CityCard';
import './Homepage.css'

function Homepage() {

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
    <div className='homepage'>
      <Banner />
      <div className='search-container'>Search Bar</div>

      <div className='accomodations-container'>
        <h3>Student accomodations in our top cities</h3>
        <div className='city-card-container'>
          {/* {
          cities.map (item=> <p>{item.name}</p>)
          } */}
          {
          cities.map(item=> <CityCard     
                                          city={item}
                                          imgUrl={item.image_url}
                                           />)
                                          
                                          
          }
        </div>
        <button className='see-all-cities-btn'>See All Cities</button>
      </div>
    </div>
  )
}

export default Homepage