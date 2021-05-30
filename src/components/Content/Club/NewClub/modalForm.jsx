/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default ({ handleChange, club }) => {
// function ModalForm() {

    // function handleChange(event) {
    //     // const [name, value] = useState(event.target);
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    // }

    return (
        <form className="row g-3">
            <div className="col-md-4">
                <label for="inputName" className="form-label" >Číslo</label>
                <input type="text" className="form-control" id="inputName" name="clubId" onChange={handleChange} value={club.clubId}/>
            </div>
            <div className="col-md-4">
                <label for="inputName" className="form-label">Název</label>
                <input type="text" className="form-control" id="inputName" name="clubName" onChange={handleChange} value={club.clubName} />
            </div>
            <div className="col-md-4">
                <label for="inputName" className="form-label">Zkrácený název</label>
                <input type="text" className="form-control" id="inputName" name="clubShortname" onChange={handleChange} />
            </div>
            <div className="col-md-4">
                <label for="inputName" className="form-label">Ulice</label>
                <input type="text" className="form-control" id="inputName" name="clubStreet" onChange={handleChange} />
            </div>
            <div className="col-md-4">
                <label for="inputName" className="form-label">Město</label>
                <input type="text" className="form-control" id="inputName" name="clubCity" onChange={handleChange}/>
            </div>
            <div className="col-md-4">
                <label for="inputName" className="form-label">PSČ</label>
                <input type="text" className="form-control" id="inputName" name="clubZip" onChange={handleChange}/>
            </div>
            <div className="col-auto">
                <label for="inputName" className="form-label">Oblast (musi byt listbox)</label>
                <input type="text" className="form-control" id="inputName" name="clubArea" onChange={handleChange}/>
            </div>
            {/* <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">Checkbox</label>
                </div>
            </div> */}
        </form>
    );
}

// export default ModalForm;