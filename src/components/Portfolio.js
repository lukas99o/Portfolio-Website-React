import React, { useState, useEffect } from 'react';
import Bank from "../images/bank.webp";
import MusicAPI from "../images/musicApi.webp";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const projectData = [
    { username: 'idris-ahmed19', projectName: 'Bank-Application-Project' },
    { username: 'Magdagasikara', projectName: 'MusicAPI' }
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

  return (
    <div className="portfolio">   
      <h1>My Portfolio!</h1>   
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <div className="portfolio-container">
                <div className='row'>
                  <h2>{projects[0].name}</h2>
                  <p>The bank application project, developed collaboratively at Chas Academy, is a console application implemented in C#.
                    It simulates fundamental banking operations, including admin login for user management, user login for account access, account creation, cash withdrawals, fund deposits, and inter-account transfers.
                    The project underscores proficiency in C# programming and demonstrates understanding of basic banking functionalities.
                    Utilizing Visual Studio for development, users can interact with the application through an intuitive interface, following prompts to perform desired transactions.
                    Developed by a team comprising Lukas Olsson, Edris Ahmed, Felix Widell, and Christian Abdulnour, the project highlights collaborative effort and learning outcomes at Chas Academy.</p>
                  <div className='img-github-container'>
                    <img src={Bank}></img>
                    <a href="https://github.com/idris-ahmed19/Bank-Application-Project" target='blank'>
                    <button>Github</button>
                    </a>
                  </div>
                  
                </div>
                <div className='row'>
                  <h2>{projects[1].name}</h2>
                  <p>The MusicAPI project, created by a team of four students from Chas Academy—@Magdagasikara, @Skokartong (Skokartong Death, Destroyer of Worlds), @lukas99o, and @StinanH (StinanH)
                    —is an educational endeavor to master REST APIs, external API integration, and client-server interactions through a music-themed console client. 
                    It leverages the Spotify and Ticketmaster APIs, enabling users to store, retrieve, and personalize music data including songs, artists, and genres. 
                    The project outlines detailed setup steps, from database creation to API authentication, and offers advanced functionality like user-specific data access and external music information fetching. 
                    Optional challenges add depth, focusing on JSON structuring, filtering, and pagination.</p>
                  <div className='img-github-container'>
                    <img src={MusicAPI}></img>
                    <a href="https://github.com/Magdagasikara/MusicAPI.git" target='blank'>
                    <button>Github</button>
                    </a>
                  </div>
                </div>
            </div>
          )}
    </div>
  );
}
      
export default Portfolio;
