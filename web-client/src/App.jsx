import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [dinos, setDinos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/dinosaurs", {
            method: 'GET',
            credentials: 'include', // for sending cookies in cross-origin requests
        })
            .then(response => response.json())
            .then(d => {
                setDinos(d);
            })
            .catch(error =>
                console.error("Error fetching data:", error));

    }, []);

    return (
        <>
            <div>
                {Array.isArray(dinos) && dinos.map((d, k) => <p key={k}>{d.name}</p>)}
            </div>
        </>
    )
}

export default App
