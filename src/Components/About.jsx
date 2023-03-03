import { Routes, Route, useNavigate } from 'react-router-dom';
// import About from './About';
import Contact from './Contact';

export default function About() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/contact');
    };

    // const navigateHome = () => {
    //     navigate('/');
    // };

    return (
        <div>
            <div>
                <h1>this is contact page</h1>
                {/* <button onClick={navigateHome}>About</button> */}
                <hr />
                <button onClick={navigateToContacts}>Contacts</button>

                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/" element={<About />} /> */}
                </Routes>
            </div>
        </div>
    );
}

// const About = () => {
//     return (
//         <>
//             <h3>This is about page</h3>
//         </>
//     )
// }

// export default About;