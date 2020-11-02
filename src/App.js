import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //united statew
            value: country.countryInfo.iso2, //US
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [countries]);
  return (
    <div className="App">
      <h1>Covid Tracker</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
          {/* <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option three</MenuItem>
          <MenuItem value="worldwide">fout</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
