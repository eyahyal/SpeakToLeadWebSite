import style from '../CompCSS/Home.module.css'
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import React from 'react';
import Lottie from 'lottie-react';
import whyJoinUsAnimation from '../assets/lottiefiles/WhyJoinUs.json';
import SpeakHome from '../assets/lottiefiles/speak.json'
import UpcomingEvent from '../assets/lottiefiles/UpcomingEvent.json'
function Home({onEventClick}){
    return(
        <>
        <div className={style.Home}>
            <div className={style.topHome}>
                <div className={style.leftHome}>
                    <h1 className={style.HomeH1}>Speak to Lead Club <span className={style.HomeH1Span}>🎤</span></h1>
                    <ReactTyped
                    strings={[
                    'Empower your voice',
                    'inspire the world',
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    className={style.ReactTyped}
                    />
                    <p className={style.HomeP1}>At Speak to Lead, we believe that every voice has the power to create change.  
                    Our club is dedicated to helping you become a confident speaker, a strong leader, and a passionate communicator.  
                    Whether you're starting your journey or sharpening your skills, you are welcome here!</p>
                </div>
                <Lottie
                animationData={SpeakHome}
                loop
                autoplay
                className={style.lottieSpeak}
                />
            </div>
        <div className={style.WhyJoinUs}>
            <div className={style.leftWhyJoinUs}>
        <h2 className={style.h2_WhyJoinUs}>Why Join Us?</h2>
            <ul className={style.ul_WhyJoinUs}>
                <li className={style.li_WhyJoinUs}>✅ Build powerful communication skills</li>
                <li className={style.li_WhyJoinUs}>✅ Overcome fear and speak with confidence</li>
                <li className={style.li_WhyJoinUs}>✅ Develop leadership and teamwork abilities</li>
                <li className={style.li_WhyJoinUs}>✅ Meet inspiring people and grow your network</li>
            </ul>
            </div>
            <Lottie
                animationData={whyJoinUsAnimation}
                loop
                autoplay
                className={style.lottieWhyJoinUs}
            />
        </div>
        <div className={style.UpcomingEvent}>
            <div className={style.LeftUpcomingEvent}>
            <h1 className={style.h1_UpcomingEvent}>Upcoming Event</h1>
            <p className={style.desc_UpcomingEvent}>
            Stay tuned for our exciting lineup of events designed to boost your speaking and leadership skills!</p>
            <ul className={style.ul_UpcomingEvent}>
                <li className={style.li_UpcomingEvent}>🚀 "Mastering Public Speaking" – May 10, 2025</li>
                <li className={style.li_UpcomingEvent}>🚀 "Debate Championship" – June 1, 2025</li>
                <li className={style.li_UpcomingEvent}>🚀 "Leadership Bootcamp" – June 15, 2025</li>
            </ul>
            <button className={style.SeeAllEvents} onClick={onEventClick}>See All Events</button>
            </div>
            <Lottie
            animationData={UpcomingEvent}
            loop
            autoPlay
            className={style.lottieUpcomingEvent}
            />
        </div>
        <div className={style.DivJoinUs}>
            <h1 className={style.h1_JoinUs}>🌟 Ready to Transform Your Future?</h1>
            <p className={style.p_JoinUs}>
            Join the <strong>Speak to Lead Club</strong> and unlock your potential as a confident speaker and inspiring leader.
            </p>
                <a target="_blank" className={style.JoinUs} href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScHnWSFPkfjuo0RNq4zjIXXSNXeeKeZseOYhXMauDLt7GEsTg%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DPAZXh0bgNhZW0CMTEAAacM_-UOmATUuqWFuQs-blHd5phiZck7OH-cJIPxsUeBtoRQ61NiMe4SvQ2Rog_aem_Jx7SSho7guMYP91t2uma7w&e=AT0baHMRqUlaaShWikV5TSQ1gvWT2UH4RF2fBJBVhU1A3F3U6pb_Jyvz9d_5VjVB1IgtpJn1fWQKFKRZBSYujUjNEu05TBNj0VGc2Fw"  rel="noopener noreferrer">
                Become a Member →</a>
        </div>
        </div>
        </>
    )
}
export default Home