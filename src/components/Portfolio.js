import React, { useState, useEffect } from 'react';
import Bank from "../images/bank.webp";
import MusicAPI from "../images/musicApi.webp";
import c from "../images/c#.png";
import romanNumerals from "../images/roman-numerals.png";
import phone from "../images/phone.png"; 
import palindrome from "../images/palindrome.jpg";
import nintendo from "../images/nintendo.png";
import racin from "../images/racin.jpg";
import paul from "../images/paul.jpg";
import cashRegister from "../images/cash-register.webp";
import PokeDex from "../images/PokeDex.png";

function Portfolio() {
  // Temporaly removed method loading project name because of github api request limitations
  /*
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const projectData = [
    { username: 'idris-ahmed19', projectName: 'Bank-Application-Project' },
    { username: 'Magdagasikara', projectName: 'MusicAPI' },
    { username: 'lukas99o', projectName: 'Technical-Documentation-Page' },
    { username: 'lukas99o', projectName: 'Roman-Numeral-Converter' },
    { username: 'lukas99o', projectName: 'Telephone-Number-Validator' },
    { username: 'lukas99o', projectName: 'Palindrome-Checker' },
    { username: 'lukas99o', projectName: 'Nintendo-Survey-Form' },
    { username: 'lukas99o', projectName: 'Thread-Racin' },
    { username: 'lukas99o', projectName: 'Paul-Stamets-Tribute-Page' }
  ];
  
  

  useEffect(() => {
    fetchGithubProjects();
  }, []);

  const fetchGithubProjects = async () => {
    try {
      const projectsData = [];
      for (const {username, projectName } of projectData) {
        const response = await fetch(`https://api.github.com/repos/${username}/${projectName}`);
        if (response.ok) {
          const data = await response.json();
          projectsData.push(data);
        } else {
          throw new Error(`Failed to fetch project: ${projectName}`);
        }
      }
      console.log(projectsData);
      setProjects(projectsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  */

  /* {loading ? (
    //<p>Loading projects...</p>
  // )}
   ) : ( */
  
  return (
    <div className="portfolio">   
      <h1>My Portfolio!</h1>   
        <div className="portfolio-container">
            <div className='row'>
              <h2>The Bank Application</h2>
              <p>The bank application project, developed collaboratively at Chas Academy, is a console application implemented in C#.
                It simulates fundamental banking operations, including admin login for user management, user login for account access, account creation, cash withdrawals, fund deposits, and inter-account transfers.
                The project underscores proficiency in C# programming and demonstrates understanding of basic banking functionalities.
                Utilizing Visual Studio for development, users can interact with the application through an intuitive interface, following prompts to perform desired transactions.
                Developed by a team comprising Lukas Olsson, Edris Ahmed, Felix Widell, and Christian Abdulnour, the project highlights collaborative effort and learning outcomes at Chas Academy.
              </p>
              <div className='img-github-container'>
                <img src={Bank}></img>
                <a href="https://github.com/idris-ahmed19/Bank-Application-Project" target='blank'>
                <button>Github</button>
                </a>
              </div>
            </div>
            
            <div className='row'>
              <h2>Music API</h2>
              <p>The MusicAPI project, created by a team of four students from Chas Academy—@Magdagasikara, @Skokartong (Skokartong Death, Destroyer of Worlds), @lukas99o, and @StinanH (StinanH)
                —is an educational endeavor to master REST APIs, external API integration, and client-server interactions through a music-themed console client. 
                It leverages the Spotify and Ticketmaster APIs, enabling users to store, retrieve, and personalize music data including songs, artists, and genres. 
                The project outlines detailed setup steps, from database creation to API authentication, and offers advanced functionality like user-specific data access and external music information fetching. 
                Optional challenges add depth, focusing on JSON structuring, filtering, and pagination.
              </p>
              <div className='img-github-container'>
                <img src={MusicAPI}></img>
                <a href="https://github.com/Magdagasikara/MusicAPI.git" target='blank'>
                <button>Github</button>
                </a>
              </div>
            </div>
            
            <div className='row'>
              <h2>C# Documentation</h2>
              <p>
                The C# Documentation project is a helpful resource for new developers learning C#. It covers basic concepts like variables and data types with clear explanations and practical code examples.
                The documentation is organized for easy navigation, so you can quickly find what you need. It also includes a search function to help you locate information fast. To use this documentation, simply clone the repository to your local machine. 
                This project is a great guide for anyone starting to learn C# programming.
              </p>
              <div className='img-github-container'>
                <img src={c}></img>
                <a href="https://github.com/lukas99o/Technical-Documentation-Page" target='blank'>
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Roman Numeral Converter</h2>
              <p>
              The Roman Numeral Converter is a handy tool for turning numbers into Roman numerals. Roman numerals use letters like I, V, X, L, C, D, and M to represent values. To use the converter, just download the program and open the index.html file in your browser. Enter a number into the input field, and it will show you the Roman numeral equivalent.
              </p>
              <div className='img-github-container'>
                <img src={romanNumerals}></img>
                <a href="https://github.com/lukas99o/Roman-Numeral-Converter" target='blank'>
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Telephone Number Validator</h2>
              <p>
              The Telephone Number Validator is an easy-to-use web app that checks if US phone numbers are valid. It supports different formats and gives instant feedback on whether the number is correct. The app has a "Check" button to validate the number and a "Clear" button to reset everything.
              </p>
              <div className='img-github-container'>
                <img src={phone}></img>
                <a href="https://github.com/lukas99o/Telephone-Number-Validator" target='blank'>
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Palindrome Checker</h2>
              <p>
              The Palindrome Checker is a simple tool that checks if a word or sentence is the same when read backward, ignoring spaces, punctuation, and case. Enter any text into the input field, and the tool will quickly tell you if it's a palindrome.
              </p>
              <div className='img-github-container'>
                <img src={palindrome}></img>
                <a href="https://github.com/lukas99o/Palindrome-Checker.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Nintendo Survey</h2>
              <p>
              The Nintendo Survey Form lets fans easily share their love for Nintendo. This quick survey asks about your favorite Nintendo games and consoles, whether old or new. It’s simple to use and works on any device, so you can fill it out quickly.
              </p>
              <div className='img-github-container'>
                <img src={nintendo}></img>
                <a href="https://github.com/lukas99o/Nintendo-Survey-Form.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>
            
            <div className='row'>
              <h2>Thread Racin</h2>
              <p>
              This C# program simulates a car race where each car is represented by a separate thread, making it a fun way to explore asynchronous programming. Each car has a different top speed, so they finish the race at different times, adding excitement to the competition. As the cars race, the program tracks their progress, and when all cars have crossed the finish line, a scoreboard displays the results. This project is a creative way to learn about threading and asynchronous operations in C#, combining programming concepts with the thrill of a virtual race.
              </p>
              <div className='img-github-container'>
                <img src={racin}></img>
                <a href="https://github.com/lukas99o/Thread-Racin.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Paul Stamets Tribute Page</h2>
              <p>
              This project is a tribute page dedicated to Paul Stamets, a leading mycologist known for his work in mycology. The page features a responsive design that adjusts to different screen sizes, showcasing a timeline of Stamets' major achievements and contributions to environmental science and medicinal mycology. It also includes an external link to his Wikipedia page for those seeking more detailed information.
              </p>
              <div className='img-github-container'>
                <img src={paul}></img>
                <a href="https://github.com/lukas99o/Paul-Stamets-Tribute-Page.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>Cash Register</h2>
              <p>
              The Cash Register Application is a simple web-based tool that simulates a cash register. It generates a random price for items and calculates the change due when a customer pays. Users can click the "Generate Random Total" button to get a random price, enter the cash amount given by the customer, and then click the "Purchase" button to see the change due. The app also clears the input fields when a new price is generated, providing a clean slate for each transaction.
              </p>
              <div className='img-github-container'>
                <img src={cashRegister}></img>
                <a href="https://github.com/lukas99o/Cash-Register.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>

            <div className='row'>
              <h2>PokéDex</h2>
              <p>
              The Pokémon Search App is a simple web tool for looking up Pokémon. Enter a Pokémon’s name, and the app shows you details like its name, ID, height, weight, and stats such as HP and attack. You’ll also see its picture and get a color-coded background based on its type. The app is easy to use on both computers and mobile devices. It pulls information from the PokéAPI and presents it in a clear, user-friendly way. It’s a handy way to quickly get Pokémon info without any fuss.
              </p>
              <div className='img-github-container'>
                <img src={PokeDex}></img>
                <a href="https://github.com/lukas99o/PokeDex.git" target="blank">
                <button>Github</button>
                </a>
              </div>
            </div>
        </div>
    </div>
  );
}
      
export default Portfolio;
