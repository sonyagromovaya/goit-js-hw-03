'use strict'
const findBestEmployee = function(employees) {
    let mostProductiveEmployee = 0;
    const keys = Object.keys(employees);
    for(const key of keys){
        if(employees[key] > mostProductiveEmployee){
            mostProductiveEmployee = employees[key];
        }
    }
    return mostProductiveEmployee;
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux