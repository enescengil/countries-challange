import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./country.module.scss";
import { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState();
  const [error, setError] = useState();
  console.log(error);
  const countryName = useParams();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName.country}`)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => setError(err.response.data));
  }, []);
  if (!country) {
    console.log("seks");
  } else {
    console.log(
      country.name.nativeName[Object.keys(country?.name.nativeName)[0]].common
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={styles.btn}>← Back</div>
      </Link>
      {error ? (
        <div className={styles.error_wrapper}>
          <h1>Country not found</h1>
        </div>
      ) : (
        <div>
          {country ? (
            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img src={country.flags.svg} alt="" />
              </div>
              <div className={styles.text_wrapper}>
                <div className={styles.text}>
                  <div className={styles.title}>{country.name.common}</div>
                  <div className={styles.infos}>
                    <div>
                      Native Name:{" "}
                      <span>
                        {
                          country.name.nativeName[
                            Object.keys(country?.name.nativeName)[0]
                          ].common
                        }
                      </span>
                    </div>
                    <div>
                      Population:{" "}
                      <span>{country.population.toLocaleString("en-US")}</span>
                    </div>
                    <div>
                      Region: <span>{country.region}</span>
                    </div>
                    <div>Sub Region: <span>{country?.subregion}</span></div>
                    <div>Capital: <span>{country?.capital}</span></div>
                    <div className={styles.right_side}>
                      <div>Top Level Domain: <span>{country?.tld}</span></div>
                      <div>
                        Currencies:{" "}
                        {Object.keys(country?.currencies).map(
                          (currency, index) => {
                            return (
                              <span>
                                {country?.currencies[currency].name}
                                {index ===
                                Object.keys(country.currencies).length - 1
                                  ? ""
                                  : ", "}
                              </span>
                            );
                          }
                        )}
                      </div>
                      <div>
                        Languages:{" "}
                        {Object.keys(country.languages).map(
                          (language, index) => {
                            return (
                              <span>
                                {country?.languages[language]}
                                {index ===
                                Object.keys(country?.languages).length - 1
                                  ? ""
                                  : ", "}
                              </span>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.border_countries}>
                    <div>Border Countries:</div>
                    <div className={styles.borders}>
                      {country?.borders?.map((border) => {
                        return (
                            <div className={styles.border_country}>
                              {border}
                            </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
}
