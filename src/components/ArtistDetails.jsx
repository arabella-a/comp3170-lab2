export default function ArtistDetails(props){

    const {artists} = props;

    return(
        <div class="artist">
            <div className="artist-img">
                <img src={artists.photo_url} alt="artist image"/>
            </div>
            <div className="artist-dtls">
                <h3>{artists.name}</h3>
                <p>Country: {artists.country}</p>
                <p>Years Active: {artists.years_active}</p>
            </div>
        </div>
    )
}