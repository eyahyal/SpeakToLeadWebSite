import style from '../CompCSS/Event.module.css'
import Lottie from 'lottie-react'
import EventCard from './EventCard'
import EventTopLottie from '../assets/lottiefiles/Event.json'


function Event(){
    return(
        <>
        <div className={style.Event}>
            <div className={style.EventTop}>
                <div className={style.LeftEvent}>
                    <h1 className={style.H1Event}>Events & Activities ✨</h1>
                    <p className={style.PEvent}>Welcome to our vibrant world of events! Throughout the year, we organize a variety of talks, workshops, competitions, and social activities that bring our community together.
                    Whether you're looking to learn something new, connect with others, or just have fun, there's always something exciting happening. Explore our recent and upcoming events below</p>
                </div>
                <Lottie
                    animationData={EventTopLottie}
                    loop
                    autoPlay
                    className={style.EventTopLottie}
                />
            </div>
            <EventCard/>
        </div>
        </>
    )
}
export default Event