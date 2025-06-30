import React from 'react';
import jag from '../images/Jag.jpg';
import profilepicture from '../images/profil-bild.jpg';

function Me() {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed313c56-6c98-4ee5-8ed3-b64937ce029b");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Message Sent Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        alert("Failed to send Message")
        setResult(data.message);
        } 
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occured while submitting the form.");
        }
    };


    return (
        <div className='me-body'>
            <div className="me-content">
                <div>
                    <h1>Me</h1>
                    <div className="me-images">
                        <img src={jag} alt="Picture of me"/>
                        <img src={profilepicture} alt="Picture of me and my girlfriend on a big rock by the sea."/>
                    </div>
                
                    <div class="me-content-p">
                        <p>
                        <span>My</span> name is Lukas Olsson, and I live in Stockholm, Sweden, sharing an apartment with my lovely girlfriend and our cat. 
                        In my free time, I enjoy activities where movement is involved, such as going to the gym, walking in nature, going for runs and hanging out with my girlfriend and friends.
                        I also have a passion for coding my own projects and gaming whenever I find a quality game that captures my interest.
                        </p>
                        <br></br>
                        <p>
                            My journey into the world of programming began about three years ago when I developed an interest in creating my own video game. 
                            However, I soon realized that game development was far more challenging than I initially thoguht. So I started a self-learning journey to learn programming.
                            I started my learning journey with FreeCodeCamp, a platform where I delved into HTML, CSS, and JavaScript.
                        </p>
                        <br></br>
                        <p>
                            As my passion for programming grew, I decided to pursue formal education in the field. I decided to take a 2 year program at Chas Acadmey, where we learned .Net fullstack development. 
                            I completed my studies may 20th 2025 and I am looking for any work related to development with a preference in .Net fullstack development.
                        </p>
                    </div>
                </div>
                
                <div className="contact-body">
                    <div className="contact-container">
                        <form onSubmit={onSubmit}>
                        <h2 className="contact-title">Contact</h2>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <textarea id="message" name="message" rows="4" placeholder="Message" />
                        <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me;
