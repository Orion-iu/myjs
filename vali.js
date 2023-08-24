function validateForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var email = document.getElementById("email").value;
            var creditcard = document.getElementById("creditcard").value;
            var expiry = document.getElementById("expiry").value;
            var cvv = document.getElementById("cvv").value;

            // Simple validation examples, you can add more complex checks
            if (username === "") {
                alert("Username is required");
                return false;
            }

            if (password === "") {
                alert("Password is required");
                return false;
            }

            if (email === "") {
                alert("Email is required");
                return false;
            }

            // Credit card validation can be more complex (Luhn algorithm, etc.)
            if (!/^\d{16}$/.test(creditcard)) {
                alert("Invalid credit card number");
                return false;
            }

            if (expiry === "") {
                alert("Expiration date is required");
                return false;
            }

            if (!/^\d{3}$/.test(cvv)) {
                alert("Invalid CVV");
                return false;
            }

            return true;
        }
