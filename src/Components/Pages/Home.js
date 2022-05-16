import React from 'react'
import Footer from '../inc/Footer'
import Slider from '../inc/Slider'
//import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome to Benzz</h2>
      <Slider/>
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 style={{color:'blue'}} class="card-title">Benz A-class</h5>
        <p class="card-text">Every Mercedes-AMG is a masterpiece in its own right, with an unmistakable character. What unites our performance vehicles and sports cars is their irrepressible sporting spirit. Their passion for top performance. It is generated at the point where engineering skill meets a very special attitude: the spirit of AMG. We believe that you have to keep on challenging limits in order to achieve new goals. We accept nothing as a given. Because limits are imposed by people, and it’s also people who can overcome them.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
      <div class="card-body">
        <h5 style={{color:'red'}} class="card-title">benz B-class</h5>
        <p class="card-text">Every Mercedes-AMG is a masterpiece in its own right, with an unmistakable character. What unites our performance vehicles and sports cars is their irrepressible sporting spirit. Their passion for top performance. It is generated at the point where engineering skill meets a very special attitude: the spirit of AMG. We believe that you have to keep on challenging limits in order to achieve new goals. We accept nothing as a given. Because limits are imposed by people, and it’s also people who can overcome them.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 style={{color:'violet',}} class="card-title">Benz c-class</h5>
        <p class="card-text">Every Mercedes-AMG is a masterpiece in its own right, with an unmistakable character. What unites our performance vehicles and sports cars is their irrepressible sporting spirit. Their passion for top performance. It is generated at the point where engineering skill meets a very special attitude: the spirit of AMG. We believe that you have to keep on challenging limits in order to achieve new goals. We accept nothing as a given. Because limits are imposed by people, and it’s also people who can overcome them.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Benz d-class</h5>
        <p class="card-text">Every Mercedes-AMG is a masterpiece in its own right, with an unmistakable character. What unites our performance vehicles and sports cars is their irrepressible sporting spirit. Their passion for top performance. It is generated at the point where engineering skill meets a very special attitude: the spirit of AMG. We believe that you have to keep on challenging limits in order to achieve new goals. We accept nothing as a given. Because limits are imposed by people, and it’s also people who can overcome them.</p>
      </div>
    </div>
  </div>
</div>
<Footer/>
        
      
    
    </div>
  )
}

export default Home