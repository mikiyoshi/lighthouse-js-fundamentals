const whichSchool  = function (age) {
  // Your code in here ...
  //let school = "";
  if (age < 13) {
  return "Elementary School";
  //school = "Elementary School";
  } else if (age >= 13 && age <= 18) {
  return "Secondary School"
  //school = "Secondary School";
  } else {
  return "Lighthouse Labs"
  //school = "Lighthouse Labs";
  }
  }
  console.log(whichSchool(35));
  console.log(whichSchool(8));
  console.log(whichSchool(14));