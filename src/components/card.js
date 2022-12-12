
function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className='card--image'></img>
            <div className='subtitles'>
                <p><img src={props.star} alt="star" className='star-image'></img>{props.stats.rating}({props.stats.reviewCount})•{props.location}</p>
                <p className='sub2'>{props.title}</p>
                <p className='sub3'><span className='sub3-span'>From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}

export default Card;