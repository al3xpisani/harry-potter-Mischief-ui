import React, { ReactNode } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const CharacterModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      role='dialog'
      className={`animate-ping-visible-once fixed inset-0 flex items-center justify-center bg-opacity-50 duration-300`}
    >
      <div
        className={`relative inset-0 h-auto w-[400px] rounded-lg bg-black bg-gray-900/75 p-6 shadow-lg`}
      >
        <button
          onClick={onClose}
          className='absolute right-2 top-2 text-white hover:text-gray-600'
          aria-label='Close modal'
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
