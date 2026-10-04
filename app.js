function validatePayment(amount) {
    if (amount <= 0) {
        return {
            approved: false,
            message: "Payment amount must be greater than zero"
        };
    }

    if (amount > 10000) {
        return {
            approved: false,
            message: "Payment exceeds maximum allowed amount"
        };
    }

    return {
        approved: true,
        message: "Payment approved"
    };
}

module.exports = { validatePayment };
