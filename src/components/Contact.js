import { useEffect } from "react";
import profilepicture from "../images/profil-bild.jpg";
import React from "react";
import music from "../audio/LEEONA_-_LEEONA_-_Do_I.mp3";

function Contact() {
  useEffect(() => {
    const partyButton = document.getElementById('partyButton');
    const partyMusic = document.getElementById('partyMusic');
    const contactBody = document.querySelector('.contact-body');

    let intervalId;

    const handlePartyClick = () => {
      if (!intervalId) {
        partyMusic.play();

        const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        intervalId = setInterval(() => {
          contactBody.style.background = getRandomColor();
        }, 500);

        partyButton.textContent = 'Stop Party!';
      } else {
        clearInterval(intervalId);
        contactBody.style.background = 'linear-gradient(to right, #001660, #0044cc)';
        partyMusic.pause();

        intervalId = null;
        partyButton.textContent = 'Start Party!';
      }
    };

    if (partyButton) {
      partyButton.addEventListener('click', handlePartyClick);
    }

    // Cleanup function
    return () => {
      if (partyButton) {
        partyButton.removeEventListener('click', handlePartyClick);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // Send email part:
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
    <div className="contact-body">
      <div className="contact-container">
        <form onSubmit={onSubmit}>
          <h3>Contact Me!</h3>
          <img src={profilepicture} alt="Profile" />
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Email Id" required />
          <textarea id="message" name="message" rows="4" placeholder="Type any message to me!" />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-fun">
        <button id="partyButton">Start Party!</button>
        <audio id="partyMusic" src={music}></audio>
      </div>
    </div>
  );
}

export default Contact;