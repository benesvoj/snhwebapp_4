import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

import ClubListHeader from "./clubListHeader";
import TableClubHeader from "./tableClubHeader";

function ClubsOverview(){
    // const { url } = useRouteMatch();
    return(
        <div>
            <ClubListHeader />
            <div className="h-100 box-sm bg-light border rounded-3">
            <h4>Tabulka mala zona</h4>
                <table className="table table-hover table-striped text-nowrap">
                    <thead>
                        <TableClubHeader />
                    </thead>
                    <tbody>
                        {clubsListExamples.map((TeamRow) =>
                            <tr key={TeamRow.key}>
                                <th scope="row">{TeamRow.order}</th>
                                <td className="table-team-logo">{TeamRow.img}</td>
                                <td className="table-team-title">{TeamRow.name}</td>
                                <td>{TeamRow.matchesCount}</td>
                                <td>{TeamRow.winsCount}</td>
                                <td>{TeamRow.drawsCount}</td>
                                <td>{TeamRow.losesCount}</td>
                                <td>{TeamRow.goalsGiven}</td>
                                <td>{TeamRow.goalsReceived}</td>
                                <td>{TeamRow.goalsDiff}</td>
                                <td>{TeamRow.pointsCount}</td>
                                <td>
                                    {/* TODO: predelat do funkce, generuje se ted vzdy stejne */}
                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                    <FontAwesomeIcon icon={faMinusCircle} size="lg" />
                                    <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                    <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>        
    );
}

export default ClubsOverview;