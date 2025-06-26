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
        return <div className="cv-body">Loading...</div>; 
    } else {
        return (
            <div className="cv-body">
                <div className='cv-main'>
                    <h1>CV</h1>
                    <div className='cv-container'>
                        <header className="cv-header">
                            <h1>Lukas Olsson</h1>
                            <p>Home address: Småbrukets backe 60</p>
                            <p>Mailing address: 141 39, Huddinge</p> 
                            <p>Phone number: 0762920163</p> 
                            <p>Email: lukas99o@hotmail.com</p>
                        </header>
                        
                        <section className="cv-section">
                            <h2>Employment History</h2>
                            {employmentHistory.map((job, index) => (
                                <article key={index} className="cv-article">
                                    <div><strong>Position:</strong> {job.details.position}, <strong>Employer:</strong> {job.details.employer}, <strong>Location:</strong> {job.details.location}</div>
                                    <div><strong>Dates:</strong> {job.dates.start_date} - {job.dates.end_date}</div>
                                    <div><strong>Description:</strong> {job.description}</div>
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
                                </article>
                            ))}
                        </section>

                        <section className="cv-section">
                            <h2>Additional Info</h2>
                            <div><strong>Driver's License:</strong> {CvData.additional_info.drivers_license}</div>
                            <div><strong>Languages:</strong> {CvData.additional_info.languages}</div>
                            <div><strong>References:</strong> {CvData.additional_info.references}</div>
                            <div><strong>Current Study:</strong> {CvData.additional_info.current_study}</div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
