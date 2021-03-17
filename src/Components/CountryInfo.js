import React, {useState, useEffect} from "react"

function CountryInfo() {
    const [loading, setLoading] = useState(true)
    const [countryName, setCountryName] = useState("")
    const [countryCapital, setCountryCapital] = useState("")
    const [countryPopulation, setCountryPopulation] = useState(0)
    const [countryRegion, setCountryRegion] = useState("")
    const [countrySubRegion, setCountrySubRegion] = useState("")
    const [countryArea, setCountryArea] = useState(0)
    const [countryFlag, setCountryFlag] = useState("")
    

    function fetchData() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                var randomCountry = Math.floor(Math.random() * (data.length - 1) + 1)
                setLoading(false)
                setCountryName(data[randomCountry].name)
                setCountryCapital(data[randomCountry].capital)
                setCountryPopulation(data[randomCountry].population)
                setCountryArea(data[randomCountry].area)
                setCountryRegion(data[randomCountry].region)
                setCountrySubRegion(data[randomCountry].subregion)
                setCountryFlag(data[randomCountry].flag)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="country-info">
            <div style={{display: loading? 'block' : 'none'}}><p>Loading...Please wait</p></div>
            <div style={{display: loading? 'none' : 'block'}}>
                <h1>Random Country: {countryName}</h1>
                <hr />
                <p>Let's get some facts!</p>
                <p>Capital: {countryCapital}</p>
                <p>Population: {countryPopulation}</p>
                <p>Region: {countryRegion}</p>
                <p>Sub-region: {countrySubRegion}</p>
                <p>Area: {countryArea} km</p>
            </div>
            <img src={countryFlag}></img>
            <form onSubmit={fetchData}><button>New Country</button></form>
        </div>
    )
}

export default CountryInfo