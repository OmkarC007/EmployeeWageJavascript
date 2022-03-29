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

let totalEmpHrs = 0;
let totalWorkDays = 0;

while(totalEmpHrs <= MAX_WORK_HRS_IN_MONTH && totalWorkDays < NUM_OF_WORKING_DAYS){
    totalWorkDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs +=getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total hours " +totalEmpHrs+ " Emp wage "+empWage);
 