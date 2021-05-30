import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFontAwesomeLogoFull,
  faMinusCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import clubsListExamples from "./List/clubsListExamples";


import TableClubsListHeader from "./List/tableClubsListHeader";

function ClubsListBody() {
  return (
    <div>
      <div className="table-zone-lg mb-4 bg-light rounded-3">
        <div className="container-fluid box-lg">
          <table className="table table-hover table-striped text-nowrap">
            <thead>
              <TableClubsListHeader />
            </thead>
            <tbody>
              {clubsListExamples.map((clubRow) =>
                <tr key={clubRow.key}>
                  <th scope="row">{clubRow.code}</th>
                  <td className="table-team-logo">{clubRow.img}</td>
                  <td className="table-team-title">{clubRow.name}</td>
                  <td>{clubRow.area}</td>
                  <td>{clubRow.contactName}</td>
                  <td>{clubRow.contactPhone}</td>
                  <td>{clubRow.contactEmail}</td>
                  <td>{clubRow.parentOrganisation}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClubsListBody;