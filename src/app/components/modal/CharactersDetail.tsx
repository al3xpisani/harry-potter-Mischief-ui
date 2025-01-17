'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { CharacterModal } from './CharacterModal';
import { CastDetails } from '@/app/types/character';

export const CharactersDetail = ({
  characters,
}: {
  characters: CastDetails[];
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const popupCharacterID = params.get('popupcharacterdetail') || '';
  const closeModal = () => {
    router.push('/');
  };
  const getCharacterInfo = characters
    .map((charTypes) => {
      return charTypes.characters.filter((m) => m.id === popupCharacterID);
    })
    .flat();

  const characterDetails = getCharacterInfo[0];
  return (
    <CharacterModal isOpen={!!popupCharacterID} onClose={closeModal}>
      <div className='flex justify-center'>
        <div className='relative h-24 w-24 overflow-hidden rounded-full border-2 border-gray-300'>
          <Image
            src={characterDetails?.image}
            alt={characterDetails?.actor}
            fill={true}
            objectFit='cover'
            className='rounded-full'
          />
        </div>
      </div>
      <div>
        <h2 className='text-1x1 mb-8 flex justify-center text-white'>
          {characterDetails?.actor}
        </h2>
        <form className='grid grid-cols-2 gap-4'>
          <div className='col-span-full'>
            <label className='mb-2 block text-sm font-medium'>Name</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.name}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Species</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.species}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Ancestor</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.ancestry === ''
                ? '_'
                : characterDetails?.ancestry}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>House</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.house}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Patronus</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.patronus === ''
                ? '_'
                : characterDetails?.patronus}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Student</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.hogwartsStudent ? 'Yes' : 'No'}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Birth</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.dateOfBirth === ''
                ? '_'
                : characterDetails?.dateOfBirth}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Eye Color</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.eyeColour}
            </div>
          </div>
          <div>
            <label className='mb-2 block text-sm font-medium'>Hair Color</label>
            <div className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'>
              {characterDetails?.hairColour}
            </div>
          </div>
          <div className='col-span-2'>
            <label className='mb-2 block text-sm font-medium'>
              Alternate Names
            </label>
            <textarea
              className='w-full rounded-md border border-gray-600 bg-gray-800 p-2'
              placeholder=''
              rows={2}
              value={characterDetails?.alternate_names?.join(',') || ''}
              readOnly
            />
          </div>
        </form>
        <div className='mt-4 flex justify-end'>
          <button
            className='rounded-md bg-[#f0ad05] px-4 py-2 hover:bg-[#ddbb65]'
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </CharacterModal>
  );
};
