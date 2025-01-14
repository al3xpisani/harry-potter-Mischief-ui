'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import { Character } from '../types/character';
import { MovieInfo } from './MovieInfo';

export const MovieCard = ({ movie }: { movie: Character }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => setIsFavorited((prev) => !prev);

  return (
    <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]'>
      <Image
        src={movie.image}
        alt={movie.name}
        width={600}
        height={400}
        className='h-full w-full rounded-md object-cover object-center transition'
      />
      <div className='invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible'>
        <Image
          src={movie.image}
          alt={movie.name}
          width={600}
          height={400}
          className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
        />
        <MovieInfo
          movie={movie}
          toggleFavorite={toggleFavorite}
          isFavorited={isFavorited}
        />
      </div>
    </div>
  );
};
