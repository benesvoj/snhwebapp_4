import React from "react";

function TableTeamHeader() {
    return (
        <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col" className="table-team-title">Oddíl</th>
            <th scope="col">Z</th>
            <th scope="col">V</th>
            <th scope="col">R</th>
            <th scope="col">P</th>
            <th scope="col">G+</th>
            <th scope="col">G-</th>
            <th scope="col">R</th>
            <th scope="col">B</th>
            <th scope="col">Posledních 5</th>
        </tr>
    );
}

export default TableTeamHeader;