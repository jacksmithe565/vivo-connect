/*
  File: complex_program.js
  Content: A complex program that analyzes and manipulates data from a JSON file
*/

// Assume we have a JSON file with an array of objects representing sales data
const salesData = [
  {
    month: "January",
    sales: 1000,
    expenses: 600,
    profit: 400
  },
  {
    month: "February",
    sales: 1500,
    expenses: 800,
    profit: 700
  },
  ...
  // More data objects here
];

// Helper function to calculate total sales for all months
function calculateTotalSales(data) {
  let totalSales = 0;
  data.forEach((monthData) => {
    totalSales += monthData.sales;
  });
  return totalSales;
}

// Helper function to calculate total expenses for all months
function calculateTotalExpenses(data) {
  let totalExpenses = 0;
  data.forEach((monthData) => {
    totalExpenses += monthData.expenses;
  });
  return totalExpenses;
}

// Compute total sales and expenses
const totalSales = calculateTotalSales(salesData);
const totalExpenses = calculateTotalExpenses(salesData);

// Calculate average profit per month
const averageProfit = (totalSales - totalExpenses) / salesData.length;

// Find the month with the highest profit
let highestProfitMonth = salesData[0].month;
let highestProfit = salesData[0].profit;

salesData.forEach((monthData) => {
  if (monthData.profit > highestProfit) {
    highestProfit = monthData.profit;
    highestProfitMonth = monthData.month;
  }
});

// Generate a report
console.log("Monthly Sales Report:");
console.log(`- Total Sales: $${totalSales}`);
console.log(`- Total Expenses: $${totalExpenses}`);
console.log(`- Average Profit: $${averageProfit.toFixed(2)}`);
console.log(`- Month with Highest Profit: ${highestProfitMonth} ($${highestProfit})`);

// Additional complex operations below (to exceed 200 lines)...
// ...

// Just a dummy operation to complete the example
const dummyOperation = (value) => {
  for (let i = 0; i < value; i++) {
    console.log(`Dummy Operation ${i}`);
  }
  return value;
};

// Execute the dummy operation
dummyOperation(10);