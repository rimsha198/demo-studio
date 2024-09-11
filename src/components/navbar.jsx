import styles from"@/styles/components/navbar.module.css"
import Image from "next/image"
import logo from "@/assest/logos/svg/logo-dark.svg"


const NavBar = () =>{
    return(
        <>
        <div className={styles.navbar}>
        <div className={ styles.container}>
        <div><Image src={logo} width={48} height={48}/></div>
        <ul className={styles.navitems}>
        <li>Product</li>
        <li>Solution</li>
        <li>Pricing</li>
        <li>Developers</li>
         </ul>
         <div className={styles.right_actions}>
            <a>FAQ</a>
     <button>Get Quotes</button> 
        </div>
        </div>
        </div>
        </>
    );
}

export default NavBar