/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp) => {
    if (emp.profession == "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession == "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((emp) => emp.profession != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr1 = [
    { id: 5, name: "rose", age: "24", profession: "Software Tester" },
    { id: 6, name: "modi", age: "26", profession: "Software Trainee" },
    { id: 7, name: "Abdul", age: "30", profession: "Bug Hunter" },
  ];
  console.log(arr.concat(arr1));
}
