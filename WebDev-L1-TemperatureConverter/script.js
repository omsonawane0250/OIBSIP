const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertBtn.addEventListener("click", convertTemperature);


function convertTemperature() {

    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;


    // Reset error
    errorMessage.textContent = "";


    // Check empty input
    if (temperatureInput.value.trim() === "") {

        results.classList.add("hidden");

        errorMessage.textContent =
            "Please enter a temperature value.";

        return;
    }


    // Check numeric input
    if (Number.isNaN(value)) {

        results.classList.add("hidden");

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert from Celsius
    if (unit === "celsius") {

        celsius = value;

        fahrenheit =
            (value * 9 / 5) + 32;

        kelvin =
            value + 273.15;
    }


    // Convert from Fahrenheit
    else if (unit === "fahrenheit") {

        fahrenheit = value;

        celsius =
            (value - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // Convert from Kelvin
    else if (unit === "kelvin") {

        kelvin = value;

        celsius =
            value - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // Absolute zero validation
    if (kelvin < 0) {

        results.classList.add("hidden");

        errorMessage.textContent =
            "Invalid temperature: values below absolute zero are not possible.";

        return;
    }


    // Display results
    celsiusResult.textContent =
        `${formatNumber(celsius)} °C`;

    fahrenheitResult.textContent =
        `${formatNumber(fahrenheit)} °F`;

    kelvinResult.textContent =
        `${formatNumber(kelvin)} K`;


    results.classList.remove("hidden");
}


// Keep results readable
function formatNumber(number) {

    return Number(number.toFixed(2));
}