import React from 'react';

 const Result = () => {

    console.log("Result 실행");
        return(
        <>
            <h1>Result : </h1><h3 id="waiting">waiting for input</h3>
<div id ="result">
            <table>
      <thead>
      <tr>
        <td>Item</td><td>Hours</td><td>Rate/Perc</td><td>Amount</td><td>Date Worked</td>
      </tr>
     
          </thead>
          <tbody>
          <tr>
          <td id="item"></td>
            <td id="hours">
            </td>
            <td id="rate"></td>
            <td id="amount"></td><td id="date_worked"></td>
        </tr>
          <tr><td>Addition</td></tr>
        <tr>
            <td id="loading"></td><td id="loading_hours"></td><td id="loading_rate"></td><td id="loading_amount"></td><td id="loading_date"></td>
          </tr>
              </tbody>
    
     
    </table>
    <table>
        <thead>
            <tr>
            <td>Item</td><td>This pay</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Taxable Income<br/>Tax<br/>NET PAY</td><td id="this_pay"></td>
            </tr>
        </tbody>
        </table>
        </div>
        </>);
}
export default Result;