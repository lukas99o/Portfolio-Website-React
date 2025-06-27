import profilepicture from "../images/profil-bild.jpg";
import React from "react";

function Contact() {
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
      <h1 className="contact-title">Contact</h1>
      <div className="contact-container">
        <form onSubmit={onSubmit}>
          <img src={profilepicture} alt="Profile" />
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email" required />
          <textarea id="message" name="message" rows="4" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;