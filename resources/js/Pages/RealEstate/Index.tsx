import { Fragment } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "@type/Interfaces/Photo.ts";
import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import {Link} from "@inertiajs/react";

export default function Index() {
    // const getPhotos = async () => {
    //     const response = await axios.get(
    //         "https://api.unsplash.com/photos/?client_id=BfRTe9OD4xtmdgLoM09JTK6DKvxJ_bE3CdEFjtw4lYg",
    //     );
    //     return response.data;
    // };
    //
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ["photos"],
    //     queryFn: getPhotos,
    // });
    //
    // todo make one component for this below
    // if (isPending) {
    //     return <span>Loading...</span>;
    // }
    //
    // if (isError) {
    //     return <span>Error: {error.message}</span>;
    // }

    return (
        <Authenticated pageTitle={"Real Estates"}>
            <h1>Real Estates</h1>

            <Link href="real-estate/create">Create</Link>
            {/*<ul className={"photo_items"}>*/}
            {/*    {data.map((photo: Photo, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            <p>{photo.alt_description}</p>*/}
            {/*            <img*/}
            {/*                src={photo.urls.thumb}*/}
            {/*                alt={photo.alt_description}*/}
            {/*            ></img>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </Authenticated>
    );
}
