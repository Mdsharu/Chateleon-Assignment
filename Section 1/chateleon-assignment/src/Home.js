import React from 'react'
// import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// import './MyForm';
// import MyForm from './MyForm';


function Home() {

    const navigate = useNavigate();

    const navigateMyForm = () => {
        navigate("/form");
    }


    return (
        <div className="Home">
            <div className="welcome-container">
                <h1>Welcome to the Website</h1>
                <p>Explore and enjoy your stay!</p>

                <button className="myBtn" onClick={navigateMyForm}>
                    Add a Person
                </button>
            </div>
        </div>
    );
}

export default Home;
