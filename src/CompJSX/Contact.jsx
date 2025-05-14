import style from '../CompCSS/Contact.module.css'
import React,{useState} from 'react';
import { SocialData } from '../Data/SocialData'
function Contact(){
    const [hoverIndex , setHoverIndex] = useState(null);
    return(
        <>
            <div className={style.Contact}>
                <div className={style.topContact}>
                    <h1 className={style.topContactH1}>Have Questions? We’re Here!</h1>
                    <p className={style.topContactP}>Whether you're ready to join or just curious about our club, 
                        we're excited to hear from you! Reach out through any of the channels below.</p>
                </div>

                <div className={style.ContactMail}>
                    <h3 className={style.ContactH3}>Email Us</h3>
                    <a href="mailto:speaktolead@gmail.com" className={style.EmailLink}>
                        speaktolead@gmail.com
                    </a>
                </div>

                <div className={style.ContactJoinUs}>
                    <h2 className={style.ContactJoinUsH2}>Want to Join Us?</h2>
                    <p className={style.ContactText}>
                        We're always excited to welcome new voices to Speak to Lead Club. If you're ready to take the stage and grow with us,
                        click below to access the official Join Us form.
                    </p>  
                    <a className={style.Contacta}  target="_blank" href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScHnWSFPkfjuo0RNq4zjIXXSNXeeKeZseOYhXMauDLt7GEsTg%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DPAZXh0bgNhZW0CMTEAAacM_-UOmATUuqWFuQs-blHd5phiZck7OH-cJIPxsUeBtoRQ61NiMe4SvQ2Rog_aem_Jx7SSho7guMYP91t2uma7w&e=AT0baHMRqUlaaShWikV5TSQ1gvWT2UH4RF2fBJBVhU1A3F3U6pb_Jyvz9d_5VjVB1IgtpJn1fWQKFKRZBSYujUjNEu05TBNj0VGc2Fw">
                        <button className={style.ContactJoinButton}>📝 Fill the Join Us Form</button>
                    </a>
                </div>

                <div>
                    <ul className={style.ulContact}>
                            {SocialData.map((icon , index) =>(
                                <li key={index} className={style.liContact} onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(null)}>
                                    <a href={icon.link}><img src={icon.src} alt={icon.name} className={` ${style.icon} ${hoverIndex === index? style.hoveredIcon : ''}`} /></a>
                                    <div className={` ${style.name} ${hoverIndex === index? style.hoveredname : ''}`}>
                                        {icon.name}
                                    </div>
                                </li>
                            ))
                            }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact