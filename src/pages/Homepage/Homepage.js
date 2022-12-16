import axios from 'axios';
import React, {useEffect} from 'react'
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
      axios.get(`${baseUrl}/cities?limit=20`)
      // https://unilife-server.herokuapp.com/cities
      .then (res =>{
        console.log(res.data);
        //store the data from the api into state
        setCities(res.data)
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
        <div className='city-card container'>
        {
              setCities.map(item=> <p>{item.title}</p>)
              }
          {/* <CityCard /> */}
        </div>
        <button>See All Cities</button>
      </div>
    </div>
  )
}

export default Homepage