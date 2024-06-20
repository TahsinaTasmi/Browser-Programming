// task 1.1: circle area 


function circle(radius) {
    return (radius * radius * Math.PI);
}


// task 1.2: Returns smallest value, biggest value, average and sum 

function func(arr) {
    const BiggestValue = arr.reduce((a, b) => Math.max(a, b))
    const smallestValue = arr.reduce((a, b) => Math.min(a, b))
    const averageValue = arr.reduce((a, b) => a + b) / arr.length;
    const SumValue = arr.reduce((a, b) => a + b)
    return `smallest value is : ${smallestValue} and biggest value is : ${BiggestValue} and average value is : ${averageValue} and sum value is : ${SumValue}`;
}

// console.log(func([-1, 0, 5, 6, 15, -5, 8]));



// task 1.3: Returns the power value;

function Power(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    arr.forEach((value, index) => {
        console.log(`${value} to the power of ${index} is ${value ** index}`);
    })
}
// Power(6)


// task 1.4: Revices the user name and returns the capital letter

function userName(name) {
    return `<p> ${name.toUpperCase()} <p/>`
}



// user BirthDate 

const inputs = document.getElementById("birthdate");
const btn = document.getElementById('button');
btn.addEventListener("click", () => {
    const valueOfinput = inputs.value
    if (valueOfinput === '') {
        alert("input Is empty! please choose valid input")
    } else {
        if (valueOfinput.length === 10) {
            const input = valueOfinput.split("-")
            if (input.length === 3) {
                if (input[0] > 1900 && input[0] <= new Date().getFullYear() && input[1] > 00 && input[1] <= 12 && input[2] > 00 && input[2] <= 31) {
                    console.log(`Are you ${new Date().getFullYear() - input[0]} years old.`);
                } else {
                    alert("Incorrect information!")
                }

            } else {
                alert(" Please write in the correct format yyyy-MM-dd")
            }
        } else {
            alert(" Please input the valid format of birthdate")
        }
    }
})