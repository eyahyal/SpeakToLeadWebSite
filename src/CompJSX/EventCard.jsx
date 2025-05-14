import style from '../CompCSS/EventCard.module.css'
import { EventData } from '../Data/EventData'
import Lottie from 'lottie-react'
import CardLottie from '../assets/lottiefiles/CardEvent.json'

function EventCard(){
    return(
        <>
            <div className={style.EventCard}>
                {
                    EventData.map((Event , index)=>(
                        <div key={index} className={style.card}>
                            {index == 4 ? (<Lottie
                                animationData={CardLottie}
                                loop
                                autoPlay
                                className={style.CordLottie}
                            /> ) : 
                            <>                        
                            <img src={Event.url} alt={Event.Alt} className={style.ImgCard}/>
                            <p className={style.PCard}>{Event.introduction}</p>
                            </>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default EventCard