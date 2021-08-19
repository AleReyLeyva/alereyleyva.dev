import React from 'react';

export default function Cross({ onClick }) {
  return (
    <>
      <div
        className="w-12 h-12 fixed top-5 left-32 md:left-14 flex justify-center items-end cursor-pointer"
        onClick={onClick}
      >
        <div className="cross" />
      </div>
    </>
  );
}
