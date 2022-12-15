import {useState,useEffect} from 'react'
import './index.css'
// import song from '../public/song.mp3'


function Home({ user }) {
  
  if (user) {
    return (
    <div >
    </div>)
  } else {
    return (
    <div className="homie">
      <div>
      Login,  Signup,  or  Go Away!
      </div>
      <h1 className="what">
      </h1>
    </div>)
  }
}




export default Home;


