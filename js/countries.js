const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // console.log(countries);
    // console.log(countries[1]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML);
    // console.log(allCountriesHTML[1]);
    const container = document.getElementById("countries");

    // This 'join' method is used to remove the Comma Sign (,) from the array found from the 'allCountriesHTML' variable
    container.innerHTML = allCountriesHTML.join("");
}

const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src=${country.flags.png} />
        </div>
    `
}

loadCountries();