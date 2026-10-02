function validatePayment(amount) {
    if (amount <= 0) {
        return {
            approved: false,
            message: "Payment amount must be greater than zero"
        };
    }

    return {
        approved: true,
        message: "Payment approved"
    };
}

module.exports = { validatePayment };
