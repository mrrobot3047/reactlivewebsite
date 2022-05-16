import React from 'react'
import Slider from '../Images/benz4.jpg'
import Slider1 from '../Images/benz5.jpg'
import Slider2 from '../Images/benz6.jpg'
import Footer from '../inc/Footer'

function Collection() {
  return (
    <div>
      <h1 style={{color:'blue'}} >Collection of Benz</h1>

        <div class="card mb-3" style={{maxWidth:'100%'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Slider} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Benz e5678</h5>
        <p class="card-text">The Mercedes-Benz Group AG (former Daimler AG) is one of the world's most successful automotive companies. With Mercedes-Benz AG, we are one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{maxWidth:'100%'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Slider1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Benz54322</h5>
        <p class="card-text">The Mercedes-Benz Group AG (former Daimler AG) is one of the world's most successful automotive companies. With Mercedes-Benz AG, we are one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{maxWidth:'100%'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Slider2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Benz4567</h5>
        <p class="card-text">The Mercedes-Benz Group AG (former Daimler AG) is one of the world's most successful automotive companies. With Mercedes-Benz AG, we are one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<Footer/>


    </div>
  )
}

export default Collection