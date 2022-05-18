import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfile";
import Title from '../Title';
import profile from "../assets/profile.jpg";

class App extends Component {
    state = { displayBio:false };
    
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My Name is Benjamin.</p>
                <Title />
                <p>I am always looking forward to collaborate on more projects</p>
                {
                    this.state.displayBio ?  (
                        <div>
                        <p>I live in Singapore</p>
                        <p>So far my favourite language is still Java</p>
                        <p>So far, ive learnt, Java, Python, JS, Solidity</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />

                <hr />
                <SocialProfiles />

            </div>
        )     
    }

    
}

export default App;