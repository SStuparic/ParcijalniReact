import './App.css';
import {Form} from "./components/Form";
import {useState} from "react";
import {Presentation} from "./components/Presentation";

function App() {
    const [term, setTerm] = useState();

    return (
        <div className="App">
            { !term ?
                <Form setTerm={setTerm} />
                :
                <Presentation term={term} setTerm={setTerm} />
            }
        </div>
    );
}

export default App;
