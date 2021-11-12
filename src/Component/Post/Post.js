import './post.css';
function Post({posts}){

    return (
        <ul className="list">
            {posts.map(post => (
                <li key={post.id} className="list-item">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    {/* <img src={post.imageUrl}/>  */}
                </li>
            ))}
        </ul>
    )
}

export default Post