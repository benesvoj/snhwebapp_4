import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimesCircle,
  faMinusCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";


import TableTeamHeader from "./tableTeamHeader"
import teamTableExamples from "./teamTableExamples"

function Zone1cl() {
    return (
        <div className="table-zone-lg mb-4 bg-light rounded-3">
        <div className="container-fluid box-lg">
            <h4>Tabulka dlouha zona</h4>
            <table className="table table-hover table-striped text-nowrap">
                    <thead>
                        <TableTeamHeader />
                    </thead>
                    <tbody>
                        {teamTableExamples.map((TeamRow) =>
                            <tr key={TeamRow.key}>
                                <th scope="row">{TeamRow.id}</th>
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

export default Zone1cl;