import React from 'react'
import Footer from '../inc/Footer'

function Contact() {
  return (
    <div>
        <section className='py-3 text-center bg-secondary'>
            <h1 className='text-white'>Contact Us</h1>
        </section>
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d405772.7637922393!2d-122.3376947671875!3d37.387474000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!3m2!1d37.387474!2d-122.0575434!5e0!3m2!1sen!2sin!4v1651430559479!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                  <h4>Fill below form to contact you to ride a benz</h4>
                                    <div className='underline mb-3'></div>
                                    <form>
                                        <label for="">Name</label>
                                        <input type="text" placeholder='enter your name' className='form-control mb-3'/>
                                        <label for="">Email</label>
                                        <input type="text" placeholder='enter your mail' className='form-control'/>
                                        <label for="">Phone no</label>
                                        <input type="number" placeholder='enter your number' className='form-control'/>
                                        <button type='submit' className='btn btn-primary py-2 w-100'  >Submit</button>
                                    </form>

                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        
    </div>
  )
}

export default Contact