const express = require('express');
const app = express();

app.use(express.json());

// ---------------- Static Data ----------------
const orders = [
  { id: 101, item: "Laptop", amount: 50000 },
  { id: 102, item: "Mobile", amount: 15000 },
  { id: 103, item: "Tablet", amount: 25000 }
];

const users = [
  { id: 1, name: "Raman", email: "raman@gmail.com" },
  { id: 2, name: "Ajay", email: "ajay@gmail.com" },
  { id: 3, name: "Ramanjay", email: "ramanjay@gmail.com" }
];

const products = [
  { id: 11, name: "Mouse", price: 800 },
  { id: 12, name: "Keyboard", price: 1200 },
  { id: 13, name: "Monitor", price: 7500 }
];

const students = [
  { roll: 101, name: "Ajay", marks: 88 },
  { roll: 102, name: "Raman", marks: 76 },
  { roll: 103, name: "Amu", marks: 92 }
];

const employees = [
  { id: 1, name: "Raman", dept: "HR" },
  { id: 2, name: "Ajay", dept: "IT" },
  { id: 3, name: "Neha", dept: "Finance" }
];

const books = [
  { id: 201, title: "Swift Basics", author: "Apple" },
  { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

const movies = [
  { id: 1, name: "Inception", rating: 9 },
  { id: 2, name: "Interstellar", rating: 8 }
];

const courses = [
  { id: 101, course: "Web Development", duration: "3 Months" },
  { id: 102, course: "App Development", duration: "4 Months" }
];

const cities = [
  { id: 1, name: "Delhi", population: "2 Cr" },
  { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

const weather = [
  { city: "Delhi", temp: 30, condition: "Sunny" },
  { city: "Kolkata", temp: 28, condition: "Cloudy" }
];

// ---------------- Q1 to Q10: Get all ----------------
app.get('/orders', (req, res) => res.json(orders));
app.get('/users', (req, res) => res.json(users));
app.get('/products', (req, res) => res.json(products));
app.get('/students', (req, res) => res.json(students));
app.get('/employees', (req, res) => res.json(employees));
app.get('/books', (req, res) => res.json(books));
app.get('/movies', (req, res) => res.json(movies));
app.get('/courses', (req, res) => res.json(courses));
app.get('/cities', (req, res) => res.json(cities));
app.get('/weather', (req, res) => res.json(weather));

// ---------------- Q11: Order by ID ----------------
app.get('/orders/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
});

// ---------------- Q12: User by name ----------------
app.get('/users/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const user = users.find(u => u.name.toLowerCase() === name);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// ---------------- Q13: Product by ID ----------------
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// ---------------- Q14: Student by name ----------------
app.get('/students/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const student = students.find(s => s.name.toLowerCase() === name);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// ---------------- Q15: Employee by ID ----------------
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(e => e.id === id);
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

// ---------------- Start Server ----------------
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});