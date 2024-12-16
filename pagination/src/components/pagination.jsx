import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

function Pagination(props) {
    let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
    return (
        <ul class="pagination pagination-md justify-content-end">

            <li class="page-item"><span onClick={() => props.onPageChange("&laquo;")} class="page-link" >&laquo;</span></li>
            <li class="page-item"><span onClick={() => props.onPageChange("&lsaquo;")} class="page-link" >&lsaquo;</span></li>
            {array.map(value => {
                if (value === props.page) {
                    return <li key={value} class="page-item active"><span onClick={() => props.onPageChange(value)} class="page-link" >{value}</span></li>
                } else {
                    return <li key={value} class="page-item"><span onClick={() => props.onPageChange(value)} class="page-link" >{value}</span></li>

                }
            })}

            <li class="page-item"><span onClick={() => props.onPageChange("&rsaquo;")} class="page-link" >&rsaquo;</span></li>
            <li class="page-item"><span onClick={() => props.onPageChange("&raquo;")} class="page-link" >&raquo;</span></li>

        </ul>
    )
}
export default Pagination;