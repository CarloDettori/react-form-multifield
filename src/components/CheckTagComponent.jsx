


function CheckTagComponent({ tag }) {


    return (<>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    {tag}
                </label>
            </input>
        </div>

    </>
    )

}

export default CheckTagComponent;