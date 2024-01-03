// Load the API to the project from the global API
const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}


// Display the loaded data on the project UI
const displayCountries = countries => {
    console.log(countries);
    const AllCountriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(AllCountriesHTML);

    const container = document.getElementById("countries");

    // The 'join()' method is used in the following line of code is to display the countries without 'Comma Sign (,) which is found from the variable named 'AllCountriesHTML'.
    container.innerHTML = AllCountriesHTML.join("");
}


const getCountryHTML = country => {
    return `
        <div>
            <h2>${country.name.common}</h2>
            <img src = ${country.flags.png} alt = "country-flags" />
        </div>
    `
}


loadCountries();