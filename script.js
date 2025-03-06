//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    const output = document.getElementById("output");
    const inputValue = parseFloat(document.getElementById("ip").value);

    if (isNaN(inputValue)) {
        output.innerText = "Please enter a valid number!";
        return;
    }

    output.innerText = "Processing...";

    // Step 1: Initial Promise (2 sec delay)
    new Promise(resolve => {
        setTimeout(() => {
            output.innerText = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then(num => {
        // Step 2: Multiply by 2 (2 sec delay)
        return new Promise(resolve => {
            setTimeout(() => {
                num *= 2;
                output.innerText = `Result: ${num}`;
                resolve(num);
            }, 2000);
        });
    })
    .then(num => {
        // Step 3: Subtract 3 (1 sec delay)
        return new Promise(resolve => {
            setTimeout(() => {
                num -= 3;
                output.innerText = `Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    })
    .then(num => {
        // Step 4: Divide by 2 (1 sec delay)
        return new Promise(resolve => {
            setTimeout(() => {
                num /= 2;
                output.innerText = `Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    })
    .then(num => {
        // Step 5: Add 10 (1 sec delay)
        return new Promise(resolve => {
            setTimeout(() => {
                num += 10;
                output.innerText = `Final Result: ${num}`;
                resolve(num);
            }, 1000);
        });
    });
});
``