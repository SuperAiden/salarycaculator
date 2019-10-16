import React, {useState} from 'react';
// import "./TimeTable.css";
import Result from "./Result";

const TimeTable = () => {
  
    const [hours0 ,  setHours0] = useState(0);
    const [hours1 ,  setHours1] = useState(0);
    const [hours2 ,  setHours2] = useState(0);
    const [hours3 ,  setHours3] = useState(0);
    const [hours4 ,  setHours4] = useState(0);
    const [hours5 ,  setHours5] = useState(0);
    const [hours6 ,  setHours6] = useState(0);


    const updateHours0 = e =>{
        const {target: {value}} = e;
        setHours0(value);
    }
    const updateHours1 = e =>{
        const {target: {value}} = e;
        setHours1(value);
    }
    const updateHours2 = e =>{
        const {target: {value}} = e;
        setHours2(value);
    }
    const updateHours3 = e =>{
        const {target: {value}} = e;
        setHours3(value);
    }
    const updateHours4 = e =>{
        const {target: {value}} = e;
        setHours4(value);
    }
    const updateHours5 = e =>{
        const {target: {value}} = e;
        setHours5(value);
    }
    const updateHours6 = e =>{
        const {target: {value}} = e;
        setHours6(value);
    }
    console.log("TimeTable 실행");
        return(
            <>
             <form className="time-form">
            <table className="time-table">
                    <caption>salray caculation</caption>
                    <thead>
                    <tr>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>
                      <th>Sun</th>
                    </tr>
                    </thead>
                 <tbody>
                 <tr>
                      <td><input className="input_" type="text" value={hours0} onChange = {updateHours0} />Hours</td>
                      <td><input className="input_" type="text" value={hours1} onChange = {updateHours1}/>Hours</td>
                      <td><input className="input_" type="text" value={hours2} onChange = {updateHours2}/>Hours</td>
                      <td><input className="input_" type="text" value={hours3} onChange = {updateHours3}/>Hours</td>
                      <td><input className="input_" type="text" value={hours4} onChange = {updateHours4}/>Hours</td>
                      <td><input className="input_" type="text" value={hours5} onChange = {updateHours5}/>Hours</td>
                      <td><input className="input_" type="text" value={hours6} onChange = {updateHours6}/>Hours</td>
                    </tr>
                    <tr>
                      <td id="Mon" className="day" >Normal Day</td>
                      <td id="Tue" className="day" >Normal Day</td>
                      <td id="Wed" className="day" >Normal Day</td>
                      <td id="Thu" className="day" >Normal Day</td>
                      <td id="Fri" className="day" >Normal Day</td>
                      <td >Saturday 50%</td>
                      <td>Sunday 100%</td>
                      
                    </tr>
                    <tr>
                    <td ><button id="submit_" type="submit">Caculation</button></td>
                    </tr>
                    
                 </tbody>
                  </table>
    </form>      

    <Result></Result>
            </>
            
        );

}

export default TimeTable;