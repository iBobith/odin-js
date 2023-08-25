const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny") {
        para.textContent="It is sunny today";
    } else if (choice === "rainy") {
        para.textContent="It is rainy today";
    } else if (choice === "snowing") {
        para.textContent="It is snowing today";
    } else if (choice === "overcast") {
        para.textContent="It is overcast today";
    } else {
        para.textContent=""
    }
}  