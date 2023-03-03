import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
// import Contact from './Contact';

export default function Home() {
    const navigate = useNavigate();

    // const navigateToContacts = () => {

    //     navigate('/contacts');
    // };

    const navigateAbout = () => {
        navigate('/about');
    };

    return (
        <div>
            <div>
                {/* <h1>home</h1> */}
                go to about page
                <button onClick={navigateAbout}>About</button>
                <hr />
                {/* <button onClick={navigateToContacts}>Contacts</button> */}

                <Routes>
                    {/* <Route path="/contacts" element={<Contacts />} /> */}
                    <Route path="/about/*" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}
