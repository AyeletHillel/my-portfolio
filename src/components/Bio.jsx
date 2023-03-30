import about from "../json/about.json";
import { BioContainer, BioImage } from "../styledcomponents/Bio";


export default function Bio() {
    return (
        <BioContainer>
            <h1>{about.name}</h1>
            <h3>{about.email}</h3>
            <BioImage src={about.image} />
            <p>{about.bio}</p>
        </BioContainer>
    );
}
