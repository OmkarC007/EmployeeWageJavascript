const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORK_HRS_IN_MONTH = 100;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;        
    }
}
let empHours = 0;
function calcDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkDays = 0;
let empWageArr = new Array();

while(totalEmpHrs <= MAX_WORK_HRS_IN_MONTH && totalWorkDays < NUM_OF_WORKING_DAYS){
    totalWorkDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHours = getWorkingHours(empCheck);
    totalEmpHrs += empHours;
    empWageArr.push(calcDailyWage(empHours));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total total Work Days: "+totalWorkDays+" Total hours " +totalEmpHrs+ " Emp wage "+empWage);
 