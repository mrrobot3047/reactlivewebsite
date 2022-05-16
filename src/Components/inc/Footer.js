import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section style={{height:'250px'}} className='bg-dark bg-gradient text-white py-5' >
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Company info</h6>
                    <hr/>
                    <p>
                        Why Mercedes-Benz is important?
                        Mercedes-Benz can brag that it gave the world the first production automobile. It has long been an innovator, a relentless pursuer of quality and engineering excellence. Many consumers say owning a Mercedes-Benz is a sign they have finally made it in life
                    </p>
                </div>
                  <div className='col-md-4'>
                    <h6>Quick links</h6>
                    <hr/>
                    <div><Link to="/" className='text-decoration-none text-white'>Home</Link></div>
                    <div><Link to="/about" className='text-decoration-none text-white'>About</Link></div>
                    <div><Link to="/collection" className='text-decoration-none text-white'>Collection</Link></div>
                    <div><Link to="/contact" className='text-decoration-none text-white'>Contact</Link></div>
                  
                  
                </div>
                 <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p>silicon valley texas california</p></div>
                    <div><p>++98273829847348</p></div>
                    <div><p>+986796786597</p></div>
                    <div><p>mercedesbenz@gmail.com</p></div>

                  
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer