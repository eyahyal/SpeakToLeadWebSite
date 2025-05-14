import style from '../CompCSS/About.module.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Lottie from 'lottie-react';
import Books from './Books';
import WelcomeToTheStageLottie from '../assets/lottiefiles/WelcomeToTheStage.json'
import OurMissionLottie from '../assets/lottiefiles/OurMission.json'
import BooksLottie from '../assets/lottiefiles/Books.json'
import WhatWeDoLottie from '../assets/lottiefiles/WhatWeDo.json'
import OurValueLottie from '../assets/lottiefiles/Support.json'
function About(){
    const MainStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff6fb',
        padding: '30px',
        borderRadius: '12px',
        marginTop: '30px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap'
    }
    return(
        <>
        <div className={style.About} >
        <div className={style.introduction}>
            <div className={style.leftIntroduction}>
            <h2 className={style.H2introduction}>Welcome to the Stage ⋆⭒˚.⋆</h2>
            <p className={style.Pintroduction}>
            Welcome to Speak to Lead, where voices grow stronger and leadership begins with communication.
            We're a dynamic community of students passionate about public speaking, leadership,
            and personal growth. Whether you're just starting out or already confident on stage,
            this is where your journey accelerates.
            </p>
            </div>
            <Lottie
            animationData={WelcomeToTheStageLottie}
            loop
            autoPlay
            className={style.WelcomeToTheStageLottie}
            />
        </div>

            <div className={style.OurMission} >
            <Lottie
                    animationData={OurMissionLottie}
                    loop
                    autoPlay
                    className={style.OurMissionLottie}
                />
                <div style={MainStyle}>
                    <p className={style.POurMission}> <span className={style.H2OurMission}>Our mission is simple:</span><br/>
                    To empower every student to speak with clarity, lead with confidence, and connect with purpose — 
                    through consistent practice, meaningful feedback, and a supportive community..</p>
                </div>
            </div>

            <div className={style.WhatWeDo}>
                <div style={MainStyle} className={style.LeftWhatWeDo}>
                <h2 className={style.H2WhatWeDo}>What We Do</h2>
                <p className={style.PWhatWeDo}>Every week, we provide hands-on opportunities to grow:</p>
                <ul className={style.UlWhatWeDo}>
                    <li className={style.LiWhatWeDo}>🎤 Interactive speaking workshops</li>
                    <li className={style.LiWhatWeDo}>💼 Leadership challenges & simulations</li>
                    <li className={style.LiWhatWeDo}>🗣️ Debates and speaking competitions</li>
                    <li className={style.LiWhatWeDo}>🤝 Peer feedback and mentor support</li>
                </ul>
                </div>
                <Lottie
                    animationData={WhatWeDoLottie}
                    loop
                    autoPlay
                    className={style.WhatWeDoLottie}
                />
            </div>

            <div className={style.WhoCanJoin} style={MainStyle}>
            <h2 className={style.H2WhoCanJoin}>Who Can Join?</h2>
                <p className={style.PWhoCanJoin}>Everyone is welcome — no experience needed!
                Whether you're nervous about public speaking or a confident speaker looking to lead, 
                Speak to Lead is the place to challenge yourself, connect with others, and grow.</p>
            </div>

            <div className={style.OurValues}>
                <div style={MainStyle}>
                <h2 className={style.H2OurValues}>Our Values</h2>
                <ul className={style.UlOurValues}>
                    <li className={style.LiOurValues}>💬 Expression – We encourage every voice to be heard.</li>
                    <li className={style.LiOurValues}>🎯 Growth – Mistakes are part of the process; we grow through feedback.</li>
                    <li className={style.LiOurValues}>🤝 Community – We support and uplift one another.</li>
                    <li className={style.LiOurValues}>🚀 Leadership – We lead by example, one speech at a time.</li>
                </ul>
                </div>
                <Lottie
                    animationData={OurValueLottie}
                    loop
                    autoPlay
                    className={style.OurValueLottie}
                />
            </div>
            <div className={style.WhyItMatters} style={MainStyle}>
                <h2 className={style.H2WhyItMatters}>Why It Matters</h2>
                <p className={style.PWhyItMatters}>In a world that rewards clear communication and confident leadership, 
                    public speaking is more than a skill — it's a superpower. 
                    At Speak to Lead, we help you unlock it.</p>
                <p className={style.QuoteWhyItMatters}>“The way to develop self-confidence is to do the thing you fear.” — Dale Carnegie</p>
                <p className={style.PWhyItMatters}>Join us, and let's turn fear into fuel.</p>
            </div>
            <div className={style.Books}>
                <div className={style.LeftBooks}>
                <h2 className={style.H2Books}>Resources & Books</h2>
                <p className={style.PBooks}>Looking to grow even more outside of meetings?
                We've curated a collection of powerful books that will boost your skills in public speaking, 
                confidence-building, and leadership.
                Whether you're a beginner or a seasoned speaker, there's something for everyone.</p>
                <p className={style.TapBooks}>➡️ Tap below to explore our recommended reads and level up your journey.</p>
                <Link to="/books">
                    <button className={style.booksButton}>Explore the Books</button>
                </Link>
                </div>
                <Lottie
                    animationData={BooksLottie}
                    loop
                    autoPlay
                    className={style.BooksLottie}
                />
            </div>
        </div>
        </>
    )
}

export default About