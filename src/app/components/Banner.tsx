import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { BannerImageDetails } from '../types/character';
import Link from 'next/link';

export function Banner({
  bannerDetails,
}: {
  bannerDetails: BannerImageDetails;
}) {
  return (
    <div className='mb-10 lg:mb-20'>
      <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex aspect-square h-[95vh] w-full flex-col bg-black'>
          <video
            autoPlay
            loop
            muted
            className='z-20 hidden h-full w-full object-cover opacity-50 transition duration-1000 ease-in-out lg:block'
            poster={bannerDetails.image}
            src={bannerDetails.videoFileURL}
          />
          <Image
            src={bannerDetails.image}
            alt={bannerDetails.name}
            fill={true}
            className='object-cover object-top opacity-30 filter lg:hidden'
          />
        </div>
        <h1 className='text-4xl font-bold lg:text-7xl'>{bannerDetails.name}</h1>
        <p className='text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl'>
          {bannerDetails.description}
        </p>
      </div>
      <div className='flex space-x-3'>
        <Link
          href={''}
          className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'
        >
          <PlayIcon className='h-6' />
          Watch Now
        </Link>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
          <InformationCircleIcon className='h-6' />
          More Info
        </button>
      </div>
    </div>
  );
}
