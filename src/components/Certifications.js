import React from 'react';
import cert1 from '../images/certification html css.png';
import cert2 from '../images/js certificate.png';
import cert3 from '../images/New js Certificate.png';

function Cert() {
    const htmlCss = () => {
        window.open('https://www.freecodecamp.org/certification/Simba_Lukas/responsive-web-design', '_blank');
    }

    const js = () => {
        window.open('https://www.freecodecamp.org/certification/Simba_Lukas/javascript-algorithms-and-data-structures', '_blank');
    }

    return (
        <div>
            <main className="cert-main">
                <div className="cert-content">
                    <h1>Certifications</h1>
                    
                    <div className="cert1">
                        <h3>FreeCodeCamp Responsive Web Design Certification</h3>
                        <button onClick={htmlCss}>Click to See Certificate</button>
                        <img src={cert1} alt="Html, Css Certificate"/>
                    </div>

                    <div className="cert2">
                        <h3>FreeCodeCamp Legacy JavaScript Algorithms and Data Structures Certification</h3>
                        <button onClick={js}>Click to See Certificate</button>
                        <img src={cert2} alt="legacy js Certificate"/>
                    </div>

                    <div className="cert3">
                        <h3>FreeCodeCamp New JavaScript Algorithms and Data Structures (Beta) Certification</h3>
                        <button onClick={js}>Click to See Certificate</button>
                        <img src={cert3} alt="new js Certificate"/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cert;