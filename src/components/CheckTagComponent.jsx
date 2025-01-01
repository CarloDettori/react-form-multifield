


function CheckTagComponent({ tag, handleImput }) {


    return (<li key={tag}>
        <div className="form-check" >
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={tag}
                name="tags"
                onChange={(ev) => handleImput(ev)}
            />
            <label className="form-check-label" htmlFor={`flexCheckDefault-${tag}`}>
                {tag}
            </label>

        </div>

    </li>
    )

}

export default CheckTagComponent;