import styles from './header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'


export default function Header({theme, setTheme}) {

    const changeTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

  return (
    <div className={styles.header}>
        <div className={styles.header_inner}>
            <div className={styles.logo}>
                <span>Where in the world?</span>
            </div>
            <div className={styles.btn_wrapper}>
                <div className={styles.btn} onClick={() => changeTheme()}>
                    {theme === "light"
                    ?<><FontAwesomeIcon icon={faMoon} /> Dark mode</>
                    :<><FontAwesomeIcon icon={faSun} /> Light mode</>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
