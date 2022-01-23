import { useState } from "react";
import './App.css';

function Firstbulb(props) {
    if(props.isFirstBulbOn) {
        return (
            <div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" />
                <button onClick={(e) => props.toggleFirstBulb(false)}>Off</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />
                <button onClick={(e) => props.toggleFirstBulb(true)}>On</button>
            </div>
        );
    }
}

function Secondbulb(props) {
    if(props.isSecondBulbOn) {
        return (
            <div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" />
                <button onClick={(e) => props.toggleSecondBulb(false)}>Off</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />
                <button onClick={(e) => props.toggleSecondBulb(true)}>On</button>
            </div>
        );
    }
}

function App() {
    
    const [firstBulbState, setFirstBulbState] = useState(false);
    const [secondBulbState, setSecondBulbState] = useState(false);
    const onToggleFirstBulb = (value) => {
        setFirstBulbState(value);
    }
    const onToggleSecondBulb = (value) => {
        setSecondBulbState(value);
    }

    return (
        <div style={{display:"flex"}}>
            <Firstbulb isFirstBulbOn={firstBulbState} toggleFirstBulb={onToggleFirstBulb}/>
            <Secondbulb isSecondBulbOn={secondBulbState} toggleSecondBulb={onToggleSecondBulb}/>
        </div>    
    );
}

export default App;
