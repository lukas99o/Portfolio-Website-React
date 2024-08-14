import React from 'react';
import smilla from '../images/Smilla Jäsp.jpeg';
import frida from '../images/Bild på mig och frida.png';

function Me() {
    return (
        <div className='me-body'>
            <div className="me-content">
                <h1>Short Presentation of Me</h1>
                <p>
                Hello, my name is Lukas Olsson, and I reside in Stockholm, Sweden, sharing an apartment with my girlfriend and our cat.
                My journey into the world of programming began about two years ago when I developed an interest in creating my own video game. 
                However, I soon realized that game development was far more challenging than I initially anticipated. Undeterred, I embarked on a self-learning journey to master programming.
                I commenced my learning journey with FreeCodeCamp, a platform where I delved into HTML, CSS, and JavaScript. 
                As my passion for programming grew, I decided to pursue formal education in the field. 
                Presently, I am enrolled in a full-stack .NET program at Chas Academy in Stockholm, where I am honing my skills. I am set to complete my studies in June 2025.
                </p>
            </div>

            <div className="me-images">
                <img src={frida} alt="Picture of me and my girlfriend on a big rock by the sea."/>
                <img src={smilla} alt="Picture of my cat yawning"/>
            </div>
        </div>
    )
}

export default Me;
