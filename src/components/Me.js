import React from 'react';
import jag from '../images/Jag.jpg';
import frida from '../images/Bild på mig och frida.png';

function Me() {
    return (
        <div className='me-body'>
            <div className="me-content">
                <h1>Me</h1>
                <div className="me-images">
                    <img src={jag} alt="Picture of me"/>
                    <img src={frida} alt="Picture of me and my girlfriend on a big rock by the sea."/>
                </div>
                
                <div class="me-content-p">
                    <p>
                    <span>My</span> name is Lukas Olsson, and I live in Stockholm, Sweden, sharing an apartment with my lovely girlfriend and our cat. 
                    In my free time, I enjoy activities where movement is involved, such as going to the gym, walking in nature, going for runs and hanging out with my girlfriend and friends.
                    I also have a passion for coding my own projects and gaming whenever I find a quality game that captures my interest.
                    </p>
                    
                    <p>
                        My journey into the world of programming began about three years ago when I developed an interest in creating my own video game. 
                        However, I soon realized that game development was far more challenging than I initially thoguht. So I started a self-learning journey to learn programming.
                        I started my learning journey with FreeCodeCamp, a platform where I delved into HTML, CSS, and JavaScript.
                    </p>
                    
                    <p>
                        As my passion for programming grew, I decided to pursue formal education in the field. I decided to take a 2 year program at Chas Acadmey, where we learned .Net fullstack development. 
                        I completed my studies may 20th 2025 and I am looking for any work related to development with a preference in .Net fullstack development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Me;
