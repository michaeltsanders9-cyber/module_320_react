function Blog({ item }) {
    return (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <img src={item.image} alt={item.imageAlt} />
            <p>{item.description}</p>
        </div>
    )
}

export default Blog