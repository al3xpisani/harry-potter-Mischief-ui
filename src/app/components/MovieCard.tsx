'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import { Character } from '../types/character';
import { MovieInfo } from './MovieInfo';
import Link from 'next/link';

export const MovieCard = ({ movie: character }: { movie: Character }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => setIsFavorited((prev) => !prev);

  return (
    <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]'>
      <Link href={`?popupcharacterdetail=${character.id}`}>
        <Image
          src={character.image === '' ? '/no-image-actor.png' : character.image}
          alt={character.name}
          width={600}
          height={400}
          className={`${character.image === '' ? 'border-double opacity-10' : 'opacity-100'} h-full w-full rounded-md object-cover object-center transition`}
        />
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded px-4 py-2 text-lg font-bold text-white opacity-50'>
          {character.name || 'Unknown Actor'}
        </div>
      </Link>
      <div
        className={`invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible`}
      >
        <Link href={`?popupcharacterdetail=${character.id}`}>
          <Image
            src={
              character.image === '' ? '/no-image-actor.png' : character.image
            }
            alt={character.name}
            width={600}
            height={400}
            className={`${character.image === '' ? 'border-double opacity-70' : 'opacity-100'} duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition`}
          />
        </Link>
        <MovieInfo
          movie={character}
          toggleFavorite={toggleFavorite}
          isFavorited={isFavorited}
        />
      </div>
    </div>
  );
};
