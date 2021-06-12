import React from "react";

// import clubsListExamples from "./List/clubsListExamples";
import TableClubsListHeader from "./List/tableClubsListHeader";


export class ClubsListBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };

  componentDidMount() {
    fetch("http://localhost:8080/clubs", {
      "Accept": "application/json",
      "Content-Type": "application/json"
    })
      .then(res => res.json()) // nacte JSON z URL
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>CHYBA: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="table-zone-lg mb-4 bg-light rounded-3">
            <div className="container-fluid box-lg">
              <table className="table table-hover table-striped text-nowrap">
                <thead>
                  <TableClubsListHeader />
                </thead>
                <tbody>
                  {items.map((item) =>
                    <tr key={item.key}>
                      <th scope="row">{item.code}</th>
                      <td className="table-team-logo">{item.img}</td>
                      <td className="table-team-title">{item.name}</td>
                      <td>{item.county}</td>
                      <td>{item.contactName}</td>
                      <td>{item.contactPhone}</td>
                      <td>{item.contactEmail}</td>
                      <td>{item.parentSubject}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };
  };
}


// function ClubsListBody() {
//   return (
// <div>
//   <div className="table-zone-lg mb-4 bg-light rounded-3">
//     <div className="container-fluid box-lg">
//       <table className="table table-hover table-striped text-nowrap">
//         <thead>
//           <TableClubsListHeader />
//         </thead>
//         <tbody>
//           {clubsListExamples.map((clubRow) =>
//             <tr key={clubRow.key}>
//               <th scope="row">{clubRow.code}</th>
//               <td className="table-team-logo">{clubRow.img}</td>
//               <td className="table-team-title">{clubRow.name}</td>
//               <td>{clubRow.area}</td>
//               <td>{clubRow.contactName}</td>
//               <td>{clubRow.contactPhone}</td>
//               <td>{clubRow.contactEmail}</td>
//               <td>{clubRow.parentOrganisation}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>
//   );
// }

// export { ClubsListBody };