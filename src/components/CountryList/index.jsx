import styles from './countryList.module.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Dropdown from '../DropdownMenu'
import { useEffect, useState } from 'react'

export default function CountryList() {

    const [open, setOpen] = useState(false)
    const [countries, setCountries] = useState()
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState()


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(res => setCountries(res.data))
    },[])
    console.log(countries)
    console.log(search)



  return (
    <div className={styles.container}>
        <div className={styles.input_wrapper}>
            <div className={styles.search_bar}>
                <FontAwesomeIcon icon={faSearch} /> 
                <input type="text" placeholder='Search for a country...' onChange={(e) => {setSearch(e.target.value)}}/>
            </div>
            <div className={styles.filter_bar}>
                <div className={styles.filter_bar_inner} onClick={() => setOpen(open ? false : true)}>
                    {region?
                    region : "Filter by Region"} {open ? <FontAwesomeIcon icon={faChevronUp} /> :<FontAwesomeIcon icon={faChevronDown} />} 
                </div>
                < Dropdown open={open} setOpen={setOpen} region={region} setRegion={setRegion} />
            </div>
        </div>
        {countries ? 
        <div className={styles.countries_wrapper}>
            {countries?.filter(country => country.region.toLowerCase().includes(region ? region.toLowerCase() : "")).filter(country => country.name.common.toLowerCase().includes(search.toLocaleLowerCase())).map((country) => {
                return(
                <div className={styles.card}>
                    <Link to={`/${country.name.common.toLowerCase()}`} underline='none' style={{textDecoration: 'none'}}>
                        <div className={styles.image}>
                            <img src={country.flags.png} alt="turkey" />
                        </div>
                    </Link>
                    <div className={styles.card_text}>
                        <Link to={`/${country.name.common.toLowerCase()}`} underline='none' style={{textDecoration: 'none'}}>
                            <div className={styles.title}>
                                {country.name.common}
                            </div>
                        </Link>
                        <div className={styles.info}>
                            <div>Population: <span>{country.population.toLocaleString('en-US')}</span></div>
                            <div>Region: <span>{country.region}</span></div>
                            <div>Capital: <span>{country.capital}</span></div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        :
        <div>Loading...</div>
        }
    </div>
  )
}
