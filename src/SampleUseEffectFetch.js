import React, {useState, useEffect} from 'react';

function SampleUseEffectFetch(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            },[])
    })

    return(
        <div className="SampleUseEffectFetch">
            <h1>Learn useEffect</h1>
            <div>
                {
                    posts.map(post => (
                        <div key={post.id}>{post.title}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default SampleUseEffectFetch;