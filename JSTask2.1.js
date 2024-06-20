
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