import styles from './dropdown.module.scss'

export default function DropdownMenu({open, setOpen, setRegion, region}) {
  console.log(region)
  return (
    <div className={styles.wrapper} style={open ? {
      opacity: 1,
      top: 0
    } : {
      visibility: 'hidden',
      opacity: 0,
    }}>
        <div className={styles.list_item} onClick={() => {setRegion(''); setOpen(false)}}>Filter by Region</div>
        <div className={styles.list_item} onClick={() => {setRegion('Africa'); setOpen(false)}}>Africa</div>
        <div className={styles.list_item} onClick={() => {setRegion('America'); setOpen(false)}}>America</div>
        <div className={styles.list_item} onClick={() => {setRegion('Asia'); setOpen(false)}}>Asia</div>
        <div className={styles.list_item} onClick={() => {setRegion('Europe'); setOpen(false)}}>Europe</div>
        <div className={styles.list_item} onClick={() => {setRegion('Oceania'); setOpen(false)}}>Oceania</div>
    </div>
  )
}
