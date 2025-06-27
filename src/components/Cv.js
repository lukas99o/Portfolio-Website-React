import React, { useState, useEffect } from 'react';
import CvData from '../jsonFiles/Cv.json';

function CV() {
    const [employmentHistory, setEmploymentHistory] = useState([]);
    const [educationHistory, setEducationHistory] = useState([]);

    useEffect(() => {
        setEmploymentHistory(CvData.employment_history);
        setEducationHistory(CvData.education);
    }, []);

    if (employmentHistory.length === 0 || educationHistory.length === 0) {
        // return <div className="cv-body">Loading...</div>; 
    } else {
        return (
            <div className="cv-body">
                <div className='cv-main'>
                    <h1 className="cv-title">CV</h1>
                    <div className='cv-container'>
                        <header className="cv-header">
                            <h1>Lukas Olsson</h1>
                            <h2>Contact</h2>
                            <div className="cv-header-p">
                                <div className="cv-header-left">
                                    <p>Home address: Småbrukets backe 60</p>
                                    <p>Mailing address: 141 58, Huddinge</p> 
                                </div>
                                <div className="cv-header-right">
                                    <p>Phone number: 0762920163</p> 
                                    <p>Email: lukas99o@hotmail.com</p>
                                </div>
                            </div>
                        </header>

                        <section>
                            <h2>About Me</h2>
                            <p>Newly graduated .NET Fullstack Developer with skills in C#, .NET, Entity Framework, Microsoft SQL, MVC, Azure, React, TypeScript, HTML, CSS, and agile methodologies. Interested in DevOps and CI/CD.</p>
                        </section>
                        
                        <section className="cv-section">
                            <h2>Employment History</h2>
                            {employmentHistory.map((job, index) => (
                                <article key={index} className="cv-article">
                                    <div><strong>Position:</strong> {job.details.position}, <strong>Employer:</strong> {job.details.employer}, <strong>Location:</strong> {job.details.location}</div>
                                    <div><strong>Dates:</strong> {job.dates.start_date} - {job.dates.end_date}</div>
                                    <div><strong>Description:</strong> {job.description}</div>
                                    <br></br>
                                </article>
                            ))}
                        </section>
                        
                        <section className="cv-section">
                            <h2>Education</h2>
                            {educationHistory.map((edu, index) => (
                                <article key={index} className="cv-article">
                                    <div><strong>Program:</strong> {edu.program}, <strong>Institution:</strong> {edu.institution}, <strong>Location:</strong> {edu.location}</div>
                                    <div><strong>Dates:</strong> {edu.start_date} - {edu.end_date}</div>
                                    <div><strong>Description:</strong> {edu.description}</div>
                                    <br></br>
                                </article>
                            ))}
                        </section>

                        <section className="cv-section">
                            <h2>Additional Info</h2>
                            <div><strong>Driver's License:</strong> {CvData.additional_info.drivers_license}</div>
                            <div><strong>Languages:</strong> {CvData.additional_info.languages}</div>
                            <div><strong>References:</strong> {CvData.additional_info.references}</div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
