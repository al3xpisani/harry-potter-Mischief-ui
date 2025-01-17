import { Suspense } from 'react';
import { getCharactersByCastType } from './service/CharacterService';
import { Banner } from './components/Banner';
import { CharacterRow } from './components/CharacterRow';
import { getBannerInfo } from './service/ApiBannerRequest';
import { CharactersDetail } from './components/modal/CharactersDetail';
import { CastDetails } from './types/character';

export default async function Home() {
  const castTypes = ['Students', 'Staff'];
  const bannerDetails = getBannerInfo();
  const characters = await Promise.all(
    castTypes.map(async (cast) => {
      const characters = await getCharactersByCastType(cast);
      const castDetails: CastDetails = { sectionTitle: cast, characters };
      return castDetails;
    })
  );
  return (
    <Suspense>
      <div className='relative'>
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16'>
          <Banner bannerDetails={bannerDetails} />
          {characters.map((character, index) => (
            <CharacterRow
              key={index}
              sectionTitle={character.sectionTitle}
              characters={character.characters}
            />
          ))}
        </main>
      </div>
      <CharactersDetail characters={characters} />
    </Suspense>
  );
}
