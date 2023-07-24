import {useEffect, useState} from "react";

export function Repositories({term}) {
    const [repositories, setRepositories] = useState();

    useEffect(() => {
        if (term) {
            fetch(`https://api.github.com/users/${term}/repos`)
                .then(result => result.json())
                .then(data => setRepositories(data));
        }
    }, [term])

    return (
        <>
            <b className="Spacing">REPOSITORIES:</b>
            <div className="Spacing RepoWrapper">
                {repositories?.map(repo => <div className="RepoDisplay">{repo.name}</div>)}
            </div>
        </>
    )
}
