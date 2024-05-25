import axios from "axios";
import {Fragment} from "react";
import Post from "@type/Interfaces/Post.ts";
import {useQuery} from "@tanstack/react-query";


export default function Show({id} : {id: number}) {

    // todo make backToPrev page component
    const getPost = async function (postId : number): Promise<Post> {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return response.data;
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['post', id],
        queryFn: async () => {
            return await getPost(id)
        },
    })

    //todo make one component for this below
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return(
        <Fragment>
            <h1>{data?.title}</h1>
            <div className={'body'}>{data?.body}</div>
        </Fragment>
    )

}
