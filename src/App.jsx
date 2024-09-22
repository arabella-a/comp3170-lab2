import { artists } from './best-selling-music-artists';
import Heading from './components/Heading';
import ArtistDetails from './components/ArtistDetails';


function App() {

  const artistList = artists.map(artists => <ArtistDetails key={artists.name} artists={artists}/>)

  return (
    <div className="app">
      <section>
        <Heading/>
        <main>
          {artistList}
        </main>
      </section>
    </div>
  );
}

export default App;
