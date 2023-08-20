import linkedin from "/linkedin.png"
import instagram from "/instagram.png"

export default function Navbar(){
    return (
        <nav>
            <div className="nav-main">
                <h3 className="sub-title--mini" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0">JoQuotes</h3>
                <ul className="nav-list">
                    <a href="#"><li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">Home</li></a>
                    <a href="#quotes"><li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">Quotes</li></a>
                </ul>
            </div>
            <ul className="nav-socials">
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="0"><a href="https://www.linkedin.com/in/johanes-alberto/" target="_blank"><img src={linkedin} alt="" /></a></li>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500"><a href="https://www.instagram.com/johanesalberto/" target="_blank"><img src={instagram} alt="" /></a></li>
            </ul>
        </nav>
    )
}