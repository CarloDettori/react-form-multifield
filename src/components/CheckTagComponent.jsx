


function CheckTagComponent({ tag }) {


    return (<>
        <div className="form-check" key={tag}>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {tag}
                </label>
            </input>
        </div >

    </>
    )

}

export default CheckTagComponent;