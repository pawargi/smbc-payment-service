const { validatePayment } = require('./app');

console.log("Running SMBC Payment Service tests...");

const validPayment = validatePayment(100);

if (!validPayment.approved) {
    throw new Error("Valid payment test failed");
}

const invalidPayment = validatePayment(-50);

if (invalidPayment.approved) {
    throw new Error("Invalid payment test failed");
}

console.log("All payment tests passed successfully!");
