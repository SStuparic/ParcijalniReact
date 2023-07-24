import {useEffect, useState} from "react";
import {Repositories} from "./Repositories";

export function Presentation({term, setTerm}) {
    const [result, setResult] = useState();

    useEffect(() => {
        if (term) {
            fetch(`https://api.github.com/users/${term}`)
                .then(result => result.json())
                .then(data => setResult(data));
        }
    }, [term])

    return(
        <div className="Presentation Middle Border">
            {result && (
                <>
                    <div className="User">
                        <img src={result.avatar_url} alt="avatar" width={100} height={100}/>
                        <div style={{ fontSize: "2rem"}}>{result.name}</div>
                    </div>
                    <div className="Spacing"><b>BIO:</b> {result.bio}</div>
                    <div className="Spacing"><b>LOCATION:</b> {result.location}</div>
                    {<Repositories term={term} /> }
                </>
            )}
            <button type="button" onClick={() => setTerm(undefined)} className="Button">Reset</button>
        </div>
    )
}
