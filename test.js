const { validatePayment } = require('./app');

console.log("Running SMBC Payment Service tests...");

// Test 1 - Valid payment
const validPayment = validatePayment(100);

if (!validPayment.approved) {
    throw new Error("Valid payment test failed");
}

console.log("✓ Valid payment test passed");

// Test 2 - Negative payment
const invalidPayment = validatePayment(-50);

if (invalidPayment.approved) {
    throw new Error("Invalid payment test failed");
}

console.log("✓ Negative payment test passed");

// Test 3 - Payment exceeding maximum limit
const highValuePayment = validatePayment(15000);

if (highValuePayment.approved) {
    throw new Error("Maximum payment validation test failed");
}

console.log("✓ Maximum payment validation test passed");

console.log("All payment tests passed successfully!");
