import { useState } from 'react';
import Bank from "../images/bank.webp";
import MusicAPI from "../images/musicApi.webp";
import c from "../images/c#.png";
import romanNumerals from "../images/roman-numerals.png";
import phone from "../images/phone.png"; 
import palindrome from "../images/palindromechecler.png";
import nintendo from "../images/nintendo.png";
import racin from "../images/racin.jpg";
import paul from "../images/paul.jpg";
import cashRegister from "../images/cash-register.webp";
import PokeDex from "../images/PokeDex.png";

function ProjectCard({ title, text, img, github }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = window.innerWidth < 768;

  const words = text.split(" ");
  const shortText = words.slice(0, 70).join(" ");
  const isLong = words.length > 70;

  return (
    <div className="row">
      <h2>{title}</h2>
      <p>
        {isExpanded || !isMobile ? text : `${shortText}...`}
        {isLong && (
          <button onClick={() => setIsExpanded(prev => !prev)} className="read-more-btn">
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      {!isMobile && isExpanded && (
        <div className="modal-backdrop" onClick={() => setIsExpanded(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={() => setIsExpanded(false)}>X</button>
          </div>
        </div>
      )}

      <div className='img-github-container'>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button>Github</button>
        </a>
        <img src={img} alt={title} />
      </div>
    </div>
  );
}


function Portfolio() {  
  const projects = [
    {
      title: "The Bank Application",
      text: `The bank application project, developed collaboratively at Chas Academy, is a console application implemented in C#.
                It simulates fundamental banking operations, including admin login for user management, user login for account access, account creation, cash withdrawals, fund deposits, and inter-account transfers.
                The project underscores proficiency in C# programming and demonstrates understanding of basic banking functionalities.
                Utilizing Visual Studio for development, users can interact with the application through an intuitive interface, following prompts to perform desired transactions.
                Developed by a team comprising Lukas Olsson, Edris Ahmed, Felix Widell, and Christian Abdulnour, the project highlights collaborative effort and learning outcomes at Chas Academy.`,
      img: Bank,
      github: "https://github.com/idris-ahmed19/Bank-Application-Project"
    },
    {
      title: "Music API",
      text: `The MusicAPI project, created by a team of four students from Chas Academy—@Magdagasikara, @Skokartong (Skokartong Death, Destroyer of Worlds), @lukas99o, and @StinanH (StinanH)
                is an educational endeavor to master REST APIs, external API integration, and client-server interactions through a music-themed console client.
                It leverages the Spotify and Ticketmaster APIs, enabling users to store, retrieve, and personalize music data including songs, artists, and genres.
                The project outlines detailed setup steps, from database creation to API authentication, and offers advanced functionality like user-specific data access and external music information fetching.`,
      img: MusicAPI,
      github: "https://github.com/Magdagasikara/MusicAPI.git"
    },
    {
      title: "C# Documentation",
      text: `The C# Documentation project is a helpful resource for new developers learning C#. It covers basic concepts like variables and data types with clear explanations and practical code examples.
                The documentation is organized for easy navigation, so you can quickly find what you need. It also includes a search function to help you locate information fast. To use this documentation, simply clone the repository to your local machine.
                This project is a great guide for anyone starting to learn C# programming.`,
      img: c,
      github: "https://github.com/lukas99o/Technical-Documentation-Page"
    },
    {
      title: "Roman Numeral Converter",
      text: `The Roman Numeral Converter is a handy tool for turning numbers into Roman numerals. Roman numerals use letters like I, V, X, L, C, D, and M to represent values. To use the converter, just download the program and open the index.html file in your browser. Enter a number into the input field, and it will show you the Roman numeral equivalent.`,
      img: romanNumerals,
      github: "https://github.com/lukas99o/Roman-Numeral-Converter"
    },
    {
      title: "Telephone Number Validator",
      text: `The Telephone Number Validator is an easy-to-use web app that checks if US phone numbers are valid. It supports different formats and gives instant feedback on whether the number is correct. The app has a "Check" button to validate the number and a "Clear" button to reset everything.`,
      img: phone,
      github: "https://github.com/lukas99o/Telephone-Number-Validator"
    },
    {
      title: "Palindrome Checker",
      text: `The Palindrome Checker is a simple tool that checks if a word or sentence is the same when read backward, ignoring spaces, punctuation, and case. Enter any text into the input field, and the tool will quickly tell you if it's a palindrome.`,
      img: palindrome,
      github: "https://github.com/lukas99o/Palindrome-Checker.git"
    },
    {
      title: "Nintendo Survey",
      text: `The Nintendo Survey Form lets fans easily share their love for Nintendo. This quick survey asks about your favorite Nintendo games and consoles, whether old or new. It’s simple to use and works on any device, so you can fill it out quickly.`,
      img: nintendo,
      github: "https://github.com/lukas99o/Nintendo-Survey-Form.git"
    },
    {
      title: "Thread Racing",
      text: `This C# program simulates a car race where each car is represented by a separate thread, making it a fun way to explore asynchronous programming. Each car has a different top speed, so they finish the race at different times, adding excitement to the competition. As the cars race, the program tracks their progress, and when all cars have crossed the finish line, a scoreboard displays the results. This project is a creative way to learn about threading and asynchronous operations in C#, combining programming concepts with the thrill of a virtual race.`,
      img: racin,
      github: "https://github.com/lukas99o/Thread-Racing.git"
    },
    {
      title: "Paul Stamets Tribute Page",
      text: `This project is a tribute page dedicated to Paul Stamets, a leading mycologist known for his work in mycology. The page features a responsive design that adjusts to different screen sizes, showcasing a timeline of Stamets' major achievements and contributions to environmental science and medicinal mycology. It also includes an external link to his Wikipedia page for those seeking more detailed information.`,
      img: paul,
      github: "https://github.com/lukas99o/Paul-Stamets-Tribute-Page.git"
    },
    {
      title: "Cash Register",
      text: `The Cash Register Application is a simple web-based tool that simulates a cash register. It generates a random price for items and calculates the change due when a customer pays. Users can click the "Generate Random Total" button to get a random price, enter the cash amount given by the customer, and then click the "Purchase" button to see the change due. The app also clears the input fields when a new price is generated, providing a clean slate for each transaction.`,
      img: cashRegister,
      github: "https://github.com/lukas99o/Cash-Register.git"
    },
    {
      title: "PokéDex",
      text: `The Pokémon Search App is a simple web tool for looking up Pokémon. Enter a Pokémon’s name, and the app shows you details like its name, ID, height, weight, and stats such as HP and attack. You’ll also see its picture and get a color-coded background based on its type. The app is easy to use on both computers and mobile devices. It pulls information from the PokéAPI and presents it in a clear, user-friendly way. It’s a handy way to quickly get Pokémon info without any fuss.`,
      img: PokeDex,
      github: "https://github.com/lukas99o/PokeDex.git"
    }
  ]

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        {projects.map((proj, i) => (
          <ProjectCard 
            key={i} 
            title={proj.title} 
            text={proj.text} 
            img={proj.img} 
            github={proj.github} 
          />
        ))}
      </div>
    </div>
  )
}
      
export default Portfolio;
