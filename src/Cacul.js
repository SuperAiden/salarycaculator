import React, {useState} from 'react';
import TimeTable from './TimeTable';
import "./TimeTable.css";

let form_ , inputs_, days_, hourly_rate, tax_percent, item_, hours_,
 rate_, amount_, date_worked, loading_, loading_hours, loading_rate, 
 loading_amount , loading_date, this_pay, waiting_, result_ ;
let totalHours;
 let days = {
   Mon: "Normal Day", Tue: "Normal Day",
   Wed: "Normal Day", Thu: "Normal Day", Fri: "Normal Day", Sat: "saturday", Sun: "sunday"
 }
const DATES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let timesWorked;
let hourlyRate;
let afternoonRate;
let causalRate;
let saturdayRate;
let SundayRate;
let publicHolidayRate;
let taxPercent;
let tax;
let amounts;
let totalNormalAmount;
let totalLoadingAmount;



class cacul extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hr : 20.13,
            tax : 15,
        }
        console.log("Calcul constructor");
       
    }

    updateHR = e =>{
      
        const {target: {value}} = e;
        this.setState({hr:value});
    }
    updateTax = e =>{
        const {target: {value}} = e;
        this.setState({tax:value});
    }

    componentDidMount(){
  
        console.log("Calcul componentDidMount"); 
       
         form_ = document.querySelector(".time-form");
         form_.addEventListener("submit", this.caculation);
         inputs_ = document.querySelectorAll(".input_")
         days_ = document.querySelectorAll(".day");
         hourly_rate = document.getElementById("hourly_rate");
         tax_percent = document.getElementById("tax_percent");
         item_ = document.getElementById("item");
         hours_ = document.getElementById("hours");
         rate_ = document.getElementById("rate");
         amount_ = document.getElementById("amount");
         date_worked = document.getElementById("date_worked");
         loading_ = document.getElementById("loading");
         loading_hours = document.getElementById("loading_hours");
         loading_rate = document.getElementById("loading_rate");
         loading_amount = document.getElementById("loading_amount")
         loading_date = document.getElementById("loading_date");
         this_pay = document.getElementById("this_pay");
         waiting_ = document.getElementById("waiting");
         result_ = document.getElementById("result");



         inputs_.forEach(eliment => {
            eliment.addEventListener("keypress", this.isNumber);
          })

          days_.forEach(eliment =>{
            eliment.addEventListener("click", this.dayClicked);
          })
        
        console.log(hourly_rate);
        // this.setState({
        //     hourlyRate : parseFloat(hourly_rate.value),
        //     causalRate : parseFloat((this.state.hourlyRate * 0.25).toFixed(2))
        // })
    }

     dayClicked = (event) => {
      const clickedDay = event.target;
      clickedDay.classList.toggle("day_clicked");
      if (clickedDay.innerText === "Normal Day") {
        clickedDay.innerText = "Public Holiday";
        days[event.target.id] = "Public Holiday";
      } else {
        clickedDay.innerText = "Normal Day";
        days[event.target.id] = "Normal Day";
      }
     
      console.log(event.target);
      console.log("days target",days[event.target.id]);
    }

      caculation = (event) => {
          console.log("caculation");
         
         console.log(event);
         event.preventDefault();
      
        hourlyRate = parseFloat(hourly_rate.value);
        causalRate = parseFloat((hourlyRate * 0.25).toFixed(2));
        SundayRate = hourlyRate + causalRate;
        publicHolidayRate = SundayRate;
        afternoonRate = ((SundayRate) * 0.15).toFixed(2);
        saturdayRate = (SundayRate * 0.5).toFixed(2);
      
        taxPercent = parseFloat(tax_percent.value) / 100;
        tax = 0;
        totalHours = 0;
        timesWorked = [];
        amounts = [];// not necessary
        totalNormalAmount = 0;
        totalLoadingAmount = 0;
        item_.innerText = "";
        hours_.innerText = "";
        rate_.innerText = "";
        amount_.innerText = "";
        date_worked.innerText = "";
        loading_hours.innerText = "";
        loading_rate.innerText = "";
        loading_amount.innerText = "";
        loading_date.innerText = "";
        this_pay.innerText = "";
        loading_.innerText = "";
        var targets = event.target;
      
        for (let i = 0; i < 7; i++) {
          let hours = parseFloat(targets[i].value);
          timesWorked.push(hours); //not necessary
      
          if (hours > 0) {
            this.normalCar(hours);
      
            item_.innerText += "Normal Hours (Normal)\n";
            hours_.innerText += `${hours}\n`;
            rate_.innerText += `${hourlyRate}\n`;
          //  amount_.innerText += `${amounts[i]}\n`;
            date_worked.innerText += `${DATES[i]}\n`;
            if (days[DATES[i]] === "Normal Day") {
              this.loadingCal("Afternoon 15% on other rates\n", afternoonRate, hours);
            } else if (days[DATES[i]] === "saturday") {
              this.loadingCal("Saturday 50% based on other rates\n", saturdayRate, hours);
            } else if (days[DATES[i]] === "sunday") {
              this.loadingCal("Sunday 100% based on other rates\n", SundayRate, hours);
            } else {
              this.loadingCal("public holiday 100%\n", publicHolidayRate, hours);
            }
            this.loadingCal("Casual Loading 25%\n", causalRate, hours);
            loading_hours.innerText += `${hours}\n${hours}\n`;
            loading_date.innerText += `${DATES[i]}\n${DATES[i]}\n`;
          }
        }
        item_.innerText += "\n";
        hours_.innerText += `${totalHours.toFixed(2)}\n`;
        rate_.innerText += "\n";
        amount_.innerText += `${totalNormalAmount.toFixed(2)}\n`;
        date_worked.innerText += "\n";
        let taxableIncome = parseFloat((totalNormalAmount + totalLoadingAmount).toFixed(2));
        tax = parseFloat((taxableIncome * taxPercent).toFixed(2));
      
      
        this_pay.innerText += `${taxableIncome}\n-${tax}\n${(taxableIncome - tax).toFixed(2)}`;
        loading_amount.innerText += totalLoadingAmount.toFixed(2);
        loading_.innerText += "\n";
        loading_hours.innerText += "\n";
        loading_rate.innerText += "\n";
        loading_date.innerText += "\n";

        waiting_.classList.add("hide");


       }

       normalCar = (hours) => {
        totalHours += hours;
        let noCal = (hours * hourlyRate).toFixed(2);
        console.log(noCal);
         amounts.push(noCal);
        amount_.innerText += noCal + "\n";
        totalNormalAmount += parseFloat(noCal);
      }

       loadingCal = (loading, rate, hours) => {
        let amount = (hours * rate).toFixed(2);
        loading_.innerText += loading;
        loading_rate.innerText += rate + "\n";
        loading_amount.innerText += amount + "\n";
        totalLoadingAmount += parseFloat(amount);
      }

       isNumber = (event) => {
        console.log("keycode : ", event.keyCode);
        if (event.keyCode < 48 || event.keyCode > 57) {
          if(event.keyCode === 13){
            console.log(" 엔터 ");
          }else if(event.keyCode != 46){
            event.returnValue = false;
            window.alert("Enter correct number~!!!");
          }
        }
      }

    render(){
        console.log("Calcul render");   
        return(<div>
            <div>
              <h1>salray caculation</h1>
            <b>Hourly Rate : $</b><input onChange = {this.updateHR} className="input_" type="text" value={this.state.hr} id="hourly_rate"></input>
        <b> Tax : </b> <input onChange = {this.updateTax} className="input_" type="text" value={this.state.tax} id="tax_percent"></input>%
            </div>
        <div>
               <TimeTable></TimeTable>
            </div>

        </div>);
    }
}

export default cacul;