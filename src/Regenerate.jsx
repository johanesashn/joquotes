export default function Regenerate(props){
    return (
        <div className="regenerate">
            <button 
                onClick={() => {
                    window.scrollTo(0, window.innerHeight - 150)
                    props.getQuotes(props.category)
                }}
                className="regenerate-btn"
            >
                Regenerate
            </button>
        </div>
    )
}