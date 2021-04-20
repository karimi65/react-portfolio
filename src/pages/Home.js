import React from 'react'
import myPhoto from '../assets/img/myPhoto.JPG'
import homeBg from '../assets/img/bgAbout.jpg'


const Home = () => {
    return (

        <div style={{ backgroundImage: `url(${homeBg})` }}>

            <div className='container'>

                <h1>Home</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>Hi,<br></br>
                            My name is <span id="name">Mohammad Ali Karimi</span>. I am from Afghanistan and came to the USA in
                            2017. I
                            have a bachelor in electrical engineering; since I’m interested in programming and web development,
                            I decided
                            to take Bootcamp classes and change my career. In this journey, I’m trying to work hard and practice
                            a lot to
                            learn more.
                        </p>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid" src={myPhoto} alt="my photo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h2>
                                Skills:
                        </h2>
                        </div>
                        <div className="col-6">
                            <h3>
                                Hobbies:
                        </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;