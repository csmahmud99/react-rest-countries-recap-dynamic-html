// Load the API to the project from the global API
const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}


// Display the loaded data on the project UI
const displayCountries = countries => {
    // console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(allCountriesHTML);

    const container = document.getElementById("countries");

    // The 'join()' method is used in the following line of code is to display the countries without 'Comma Sign (,) which is found from the variable named 'AllCountriesHTML'.
    container.innerHTML = allCountriesHTML.join("");
}


const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src = ${country.flags.png} alt = "country-flags" />
        </div>
    `
}


loadCountries();