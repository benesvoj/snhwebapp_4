import React from "react";

function TableClubsListHeader() {
    return (
        <tr>
            <th scope="col">Číslo</th>
            <th scope="col">Logo</th>
            <th scope="col" className="table-team-title">Název</th>
            <th scope="col">Oblast</th>
            <th scope="col">Org.pracovník</th>
            <th scope="col">Kontaktní tel.</th>
            <th scope="col">Kontaktní email</th>
            <th scope="col">Nadřazená organizace</th>
        </tr>
    );
}

export default TableClubsListHeader;