import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    

    const [input, setInput] = useState("");
    const chiffres = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].forEach((item) => {
        chiffres.push(
            <button className={"btn btn-info mx-1"}
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}
            >
                {item}
            </button>
        );
    });
    return (
        <div className="container">
            <h1>Calculatrice</h1>
            <br/>
            <div>{chiffres}</div>
            <br/>
            <div>
                <button className={"btn btn-danger"} onClick={() => setInput("")} > Effacer </button>
            </div>
            <br/>
            <div>
                <button className={"btn btn-warning mx-1"} onClick={(e) => setInput(input + e.target.value)} value="+"> + </button>

                <button className={"btn btn-warning mx-1"} onClick={(e) => setInput(input + e.target.value)} value="-"> - </button>

                <button className={"btn btn-warning mx-1"} onClick={(e) => setInput(input + e.target.value)} value="*"> x </button>

                <button className={"btn btn-warning mx-1"} onClick={(e) => setInput(input + e.target.value)} value="/"> / </button>
                <br/><br/>
                <button className={"btn btn-lg btn-success mx-1"} onClick={(e) => {

                            setInput(
                                String(eval(input)).length > 3 &&
                                String(eval(input)).includes(".")
                                    ? String(eval(input).toFixed(4))
                                    : String(eval(input))
                            );
                    }}
                    value="="
                >
                    =
                </button>
            </div>
            <br/>
            <input className="input-group-sm" value={input}/>

        </div>
    );
}



export default App;
