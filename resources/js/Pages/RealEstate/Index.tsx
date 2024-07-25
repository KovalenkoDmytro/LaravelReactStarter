import Authenticated from "@/Layouts/AuthenticatedLayout.tsx";
import {Link} from "@inertiajs/react";
import {RealEstate} from "@type/Interfaces/RealEstate.ts";

export default function Index({ realEstates } : [RealEstate]) {

    return (
        <Authenticated pageTitle={"Real Estates"}>
            <h1>Real Estates</h1>

            <Link href="real-estate/create">Create</Link>

            <ul className={"photo_items"}>
                {realEstates.map((realEstate: RealEstate, index: number) => (
                    <li key={index}>
                        <Link href={`real-estate/${realEstate.id}`}>

                            <img height={300} width={200} src={realEstate.media?.length  ? realEstate.media[0].original_url : 'https://static.wikia.nocookie.net/i_am_overlord_novel/images/b/ba/MissingImage.png'} alt={realEstate.name}/>
                            <p>{realEstate.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </Authenticated>
    );
}
