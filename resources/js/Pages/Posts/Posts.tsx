import { useQuery } from '@tanstack/react-query'
import {Fragment} from "react";
import axios from "axios";
import Post from "@type/Interfaces/Post";

export default function Posts() {

    const getPosts = async ()=> {
        // Make a request for a user with a given ID
        const response = await  axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return(
        <Fragment>
            <ul>
                {data.map((post: Post, index: number) => (
                    <li key={index}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
