import instagram from "/instagram.png"
import linkedin from "/linkedin.png"

export default function Footer(){
    return (
        <footer>
            <div className="left">
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/johanes-alberto/" target="_blank"><img src={linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/johanesalberto/" target="_blank"><img src={instagram} alt="" /></a>
                </div>
                <p><b>Created by Johanes - 2023</b></p> 
            </div>
            <a href="#" className="footer-button">Go Up</a>
        </footer>
    )
}