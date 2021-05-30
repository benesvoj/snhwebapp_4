import React from "react";
import LeaguesListExample from "./List/leaguesListExamples";
import TableLeaguesListHeader from "./List/tableLeaguesListHeader";

function LeaguesListBody() {
  return (
    <div>
      <div className="table-zone-lg mb-4 bg-light rounded-3">
        <div className="container-fluid box-lg">
          <table className="table table-hover table-striped text-nowrap">
            <thead>
              <TableLeaguesListHeader />
            </thead>
            <tbody>
              {LeaguesListExample.map((LeagueRow) =>
                <tr key={LeagueRow.key}>
                  <th scope="row">{LeagueRow.name}</th>
                  <td>{LeagueRow.season}</td>
                  <td>{LeagueRow.league}</td>
                  <td>{LeagueRow.category}</td>
                  <td>{LeagueRow.area}</td>
                  <td>{LeagueRow.startDate}</td>
                  <td>{LeagueRow.endDate}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaguesListBody;