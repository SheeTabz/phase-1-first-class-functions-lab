// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
  const newDrivers = drivers.slice(0,2)
  return newDrivers

}
function returnLastTwoDrivers(){
    const newDrivers = drivers.slice(2)
  return newDrivers
}
// console.log(returnLastTwoDrivers())
 
  const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){return fare * num}

    }
       
function  fareDoubler(fare){
   return fare * 2
}
function fareTripler(fare){
   return fare * 3
}
function  selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)

}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))