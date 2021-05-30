import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFontAwesomeLogoFull,
  faMinusCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import membersListExamples from "./List/membersListExamples";


import TableMembersListHeader from "./List/tableMembersListHeader";

function MembersListBody() {
  return (
    <div>
      <div className="table-zone-lg mb-4 bg-light rounded-3">
        <div className="container-fluid box-lg">
          <table className="table table-hover table-striped text-nowrap">
            <thead>
              <TableMembersListHeader />
            </thead>
            <tbody>
              {membersListExamples.map((memberRow) =>
                <tr key={memberRow.key}>
                  <th scope="row">{memberRow.code}</th>
                  <td>{memberRow.name}</td>
                  <td>{memberRow.birthDate}</td>
                  <td>{memberRow.area}</td>
                  <td>{memberRow.club}</td>
                  <td>{memberRow.contactPhone}</td>
                  <td>{memberRow.contactEmail}</td>
                  <td>{memberRow.contactAddress}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MembersListBody;