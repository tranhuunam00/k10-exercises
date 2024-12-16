import React from "react";
function SelectLimit(props) {
    return(
        <select onChange={(e) => props.onLimitChange(e.target.value)} className="form-select" >
            <option selected>Open this select menu</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    )
}

export default SelectLimit;