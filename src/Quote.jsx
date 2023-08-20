export default function Quote(props){
    return (
        <div className="card" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={props.delay}>
            <p className="card-category">{props.category}</p>
            <h3 className="card-quote">{props.quote}</h3>
            <p className="card-author">- {props.author}</p>
        </div>
    )
}