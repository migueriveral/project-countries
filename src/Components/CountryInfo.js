import React, {useState, useEffect} from "react"

function CountryInfo() {
    const [hovered, setHovered] = useState(false)

    const classNameText = hovered ? "fill" : "line"

    const [loading, setLoading] = useState('idle')
    const [error, setError] = useState('')

    const [country, setCountry] = useState({
        name: '',
        capital: '',
        population: 0,
        region: '',
        subregion: '',
        area: 0,
        flag: ''
    })

    function fetchData() {
        setLoading('pending')
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                var randomCountry = Math.floor(Math.random() * (data.length - 1) + 1)
                setCountry(data[randomCountry])
                setLoading('resolved')
            })
            .catch((error) => {
                setLoading('rejected')
                setError(error)
                })
    }

     useEffect(() => {
        fetchData()
    }, []) 

    return (
        <div className="country-info">
            <div 
                style={{display: loading === 'pending' || loading === 'idle'? 'block' : 'none'}
            }>
                <p>Loading...Please wait</p>
            </div>
            <div 
                style={{display: loading === 'rejected' ? 'block' : 'none'}
            }>
                <p>Oops an error ocurred: </p> <pre>{error.message}</pre>
            </div>
            <div 
                style={{display: loading === 'resolved' ? 'block' : 'none'}
            }>
                <h1>Random Country: {country.name}</h1>
                <hr />
                <p>Let's get some facts!</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub-region: {country.subregion}</p>
                <p>Area: {country.area} km</p>
            </div>
            <img src={country.flag} alt='country flag'></img>
            <form onSubmit={fetchData}>
                <button 
                    className={`new-country-button ${classNameText}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >New Country</button>
                </form>
        </div>
    )
}

export default CountryInfo