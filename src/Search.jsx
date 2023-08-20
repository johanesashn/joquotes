export default function Search(props){
    const categories = [
        "Select Category",
        "age",
        "alone",
        "amazing",
        "anger",
        "architecture",
        "art",
        "attitude",
        "beauty",
        "best",
        "birthday",
        "business",
        "car",
        "change",
        "communications",
        "computers",
        "cool",
        "courage",
        "dad",
        "dating",
        "death",
        "design",
        "dreams",
        "education",
        "environmental",
        "equality",
        "experience",
        "failure",
        "faith",
        "family",
        "famous",
        "fear",
        "fitness",
        "food",
        "forgiveness",
        "freedom",
        "friendship",
        "funny",
        "future",
        "god",
        "good",
        "government",
        "graduation",
        "great",
        "happiness",
        "health",
        "history",
        "home",
        "hope",
        "humor",
        "imagination",
        "inspirational",
        "intelligence",
        "jealousy",
        "knowledge",
        "leadership",
        "learning",
        "legal",
        "life",
        "love",
        "marriage",
        "medical",
        "men",
        "mom",
        "money",
        "morning",
        "movies",
        "success",
    ]

    const options = categories.map(category => (
        <option value={category}>{category}</option>
    ))
      
    return (
        <div className="search">
            <select onChange={(e) => {props.updateCategory(e.target.value)}} className="search-select">
                {options}
            </select>
        </div>
    )
}