import React from 'react';
import SOCIALPROFILES from '../data/socialProfile';

const SocialProfile = props => {
    
        const {id,title,link,image} = props.socialProfile;
        return(
            <div style={{display:'inline-block',width:100,margin:10}}>
                <a href={link}>
                    <img src={image} alt='socials' style={{width:30,height:30}}></img>
                </a>
                <p>{title}</p>
            </div>
        )
    }


const SocialProfiles = () => (
    
            <div>
                <h3>Follow me on my Socials</h3>
                <div>
                    {
                        SOCIALPROFILES.map(SOCIALPROFILE => {

                            return <SocialProfile key={SOCIALPROFILE.id} socialProfile={SOCIALPROFILE} />
                        })
                        }
                </div>
            </div>
        
)


export default SocialProfiles;