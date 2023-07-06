import React from "react";
import './Dates.css';

const Dates=()=>{
    return (

        <section className="date-wrapper">
            <div className="paddings innerWidth ">
                <div className="d-head flexColStart">
                    <span className="primaryText">Important</span>
                    <span className="date-text">Dates & Timeline</span>
                </div>
                <div >
                <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>DATE</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1 June 2023</td>
            <td>Full Paper</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2 June 2023</td>
            <td>Submission Deadline</td>
          </tr>
          <tr>
            <td>3</td>
            <td>5 June 2023</td>
            <td>Registration Closed</td>
          </tr>
          <tr>
            <td>4</td>
            <td>20 June 2023</td>
            <td>Virtual Meeting </td>
          </tr>
          <tr>
            <td>5</td>
            <td>27 June 2023</td>
            <td>Conference </td>
          </tr>
        </tbody>
      </table>
            </div>

            </div>
        </section>

    )
}

export default Dates;