let employees = [];
let idCounter = 1;

const form = document.getElementById("employeeForm");
const messageDiv = document.getElementById("message");
const employeeList = document.getElementById("employeeList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();

  // Validation
  if (name === "" || profession === "" || age === "") {
    showMessage("Error: All fields are required!", "error");
    return;
  }
  // Add new employee
  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age),
  };

  employees.push(newEmployee);
  showMessage("Success: Employee added successfully!", "success");

  renderEmployees();

  // Reset form
  form.reset();
});

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = "message " + type;
}

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach((emp) => {
    const div = document.createElement("div");
    showMessage("Success: Employee added successfully!", "success");
    div.className = "employee-card";
    div.innerHTML = `
    <div class="employee-details"><pre> ID: ${emp.id}          Name: ${emp.name}          Profession: ${emp.profession}          Age: ${emp.age}</pre></div>
    <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>`;
    employeeList.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter((emp) => emp.id !== id);
  showMessage("Success: Employee deleted successfully!", "success");
  renderEmployees();
}
