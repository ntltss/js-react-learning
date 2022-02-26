import React, {useState, useEffect} from 'react';

function SampleUseEffectFetchAsyncAwait(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const posts = await response.json();
            setPosts(posts);
        };
        fetchPost();
    })

    return(
        <div className="SampleUseEffectFetchAsyncAwait">
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

export default SampleUseEffectFetchAsyncAwait;