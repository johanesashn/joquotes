import { useTypewriter, Cursor } from "react-simple-typewriter"
import blob from "/blob.svg"
import blob2 from "/blob2.svg"

export default function Jumbotron(){
    const [text] = useTypewriter({
        words: ['"Make your day better."', '"Enjoy your good day."', '"Today is a good day."'],
        typeSpeed: 100,
        deleteSpeed: 80,
        loop: {}
    })

    return (
        <div className="jumbotron">
            {/* <img src={blob} alt="" className="jumbotron-blob" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="0"/> */}
            <h1 className="title" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">HELLO!<span className="invisible"></span></h1>
            <h1 className="title" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">GET YOUR QUOTES TODAY</h1>
            <h2 className="sub-title" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1500">{text}<Cursor/></h2>
            {/* <img src={blob} alt="" className="jumbotron-blob" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="0"/> */}
        </div>
    )
}