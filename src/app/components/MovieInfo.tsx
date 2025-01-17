import { Character } from '../types/character';
import {
  ChevronDownIcon,
  PlusIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { MovieRating } from './MovieRating';
import Link from 'next/link';

interface MovieInfoProps {
  movie: Character;
  toggleFavorite: () => void;
  isFavorited: boolean;
}

export const MovieInfo = ({ movie, toggleFavorite, isFavorited }: MovieInfoProps) => (
  <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4'>
    <div className='flex flex-row items-center justify-between gap-2'>
      <div className='flex flex-row items-center gap-2'>
        <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
          <Link href={`?popupcharacterdetail=${movie.id}`}>
            <InformationCircleIcon className='w-4 lg:w-6' />
          </Link>
        </div>
        <div
          className='flex h-6 w-6 scale-100 cursor-pointer items-center justify-center bg-transparent opacity-100 transition delay-100 duration-100 hover:text-red-500 lg:h-10 lg:w-10'
          onClick={toggleFavorite}
        >
          {isFavorited ? (
            <SolidHeartIcon className='w-4 text-red-500 lg:w-6' />
          ) : (
            <PlusIcon className='w-4 lg:w-6' />
          )}
        </div>
      </div>
      <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
        <ChevronDownIcon className='w-4 lg:w-6' />
      </div>
    </div>

    <div className='mt-4 text-sm font-bold text-white lg:text-lg'>
      {movie.name}
    </div>

    <div className='mt-4 flex flex-col gap-2 text-sm'>
      <div className='flex flex-row items-center gap-2'>
        <InformationCircleIcon className='w-4' /> {movie.house} house
        <InformationCircleIcon className='w-4' />{' '}
        {movie.ancestry === '' ? '' : movie.ancestry} ancestry
      </div>
    </div>
    <div className='mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'></div>
    <div className='flex flex-row items-center gap-2'>
      <UserGroupIcon className='w-4' /> <MovieRating rating={movie.rating} />
    </div>
  </div>
);