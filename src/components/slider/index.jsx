/** @format */

import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slider.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div class='flex  justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
    <svg
      class='w-12 h-12 text-gray-200'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 640 512'
    >
      <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
    </svg>
  </div>,
  <div class='flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
    <svg
      class='w-12 h-12 text-gray-200'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 640 512'
    >
      <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
    </svg>
  </div>,
  <div class='flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
    <svg
      class='w-12 h-12 text-gray-200'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 640 512'
    >
      <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
    </svg>
  </div>,
  <div class='flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
    <svg
      class='w-12 h-12 text-gray-200'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 640 512'
    >
      <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
    </svg>
  </div>,
];

const onInitialized = (e) => {
  console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
  console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
  console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
  console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

const index = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className='text-[#173a9a] text-4xl mb-8'>Наши Сертификаты</h1>{" "}
      <AliceCarousel
        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized}
      />
    </div>
  );
};

export default index;
