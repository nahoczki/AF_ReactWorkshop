
import {TopBar, PinataItem} from "./components";
import './App.css';
import {useEffect, useState} from "react";

function App() {

    let [pinatas, setPinatas] = useState(undefined)

    useEffect(() => {
        if (!pinatas) {
            fetch('http://localhost:4000/api/pinatas/getAllPinatas').then(async (res) => {
                let jsonData = await res.json()
                setPinatas(jsonData.data)
            })
        }
    }, [pinatas])


    return (
        <div>
            <TopBar/>

            <div className={"pinata-container"}>
                <h4>Piñatas</h4>

                {pinatas ? pinatas.map(pinata => <PinataItem pinata={pinata}/>) : "Loading"}
            </div>


        </div>
    );
}

export default App;
