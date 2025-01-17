import { Characters } from '../types/character';
import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTitle: string;
  movies: Characters;
};

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return (
    <div className='flex-col space-y-2'>
      <div className='flex'>
        <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies
          // .filter((m) => m.image)
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
}
