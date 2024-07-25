import {RealEstate} from "@type/Interfaces/RealEstate.ts";

export default function Show({realEstate}: {realEstate: RealEstate}) {
    return(
        <section>
            Real estate id = {realEstate.id}
            name :  {realEstate.name}
        </section>
    )
}
