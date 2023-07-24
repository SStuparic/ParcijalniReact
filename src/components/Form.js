export function Form({setTerm}) {

    const onSubmit = (e) => {
        e.preventDefault();
        setTerm(e.target[0].value);
    }

    return (
        <div className="Form Middle Border">
            GitHub username:
            <form onSubmit={onSubmit} className="FormWrapper">
                <input type="text" className="Input" placeholder="e.g. Facebook"/>
                <button type="submit" className="Button">GO!</button>
            </form>
        </div>
    )
}
