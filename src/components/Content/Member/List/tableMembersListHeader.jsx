import React from "react";

function TableMembersListHeader() {
    return (
        <tr>
            <th scope="col">Číslo registrace</th>
            <th scope="col" className="table-team-title">Jméno</th>
            <th scope="col">Datum narození</th>
            <th scope="col">Oblast</th>
            <th scope="col">Oddíl</th>
            <th scope="col">Kontaktní tel.</th>
            <th scope="col">Kontaktní email</th>
            <th scope="col">Kontaktní adresa</th>
        </tr>
    );
}

export default TableMembersListHeader;