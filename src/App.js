import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    

    const [input, setInput] = useState("");
    const calculBouton = [];
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].forEach((item) => {
        calculBouton.push(
            <button className={"btn btn-info"}
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
            <div>{calculBouton}</div>
            <br/>
            <div>
                <button className={"btn btn-danger"} onClick={() => setInput(input.substr(0, input.length - 1))}> Effacer </button>
                <button className={"btn btn-danger"} onClick={() => setInput("")} value=""> C </button>
            </div>
            <br/>
            <div>
                <button className={"btn btn-warning"} onClick={(e) => setInput(input + e.target.value)} value="+">+</button>

                <button className={"btn btn-warning"} onClick={(e) => setInput(input + e.target.value)} value="-"> {" "}-{" "} </button>

                <button className={"btn btn-warning"} onClick={(e) => setInput(input + e.target.value)} value="*"> {" "} x </button>

                <button className={"btn btn-warning"} onClick={(e) => setInput(input + e.target.value)} value="/"> {" "} / </button>
                
                <button className={"btn btn-warning"} onClick={(e) => {
                        try {
                            setInput(
                                String(eval(input)).length > 3 &&
                                String(eval(input)).includes(".")
                                    ? String(eval(input).toFixed(4))
                                    : String(eval(input))
                            );
                        } catch (e) {
                            console.log(e);
                        }
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
