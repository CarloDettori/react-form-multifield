


function CheckTagComponent({ tag }) {


    return (<li key={tag}>
        <div className="form-check" >
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {tag}
            </label>

        </div>

    </li>
    )

}

export default CheckTagComponent;