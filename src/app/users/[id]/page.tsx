import React from 'react';
import data from '../../../../Data/data';
import Image from 'next/image';
import Comments from '@/app/component/Comment';
import Navbar from '@/app/component/Navbar';

interface param {
  params: {
    id: string;
  };
}

const page = ({ params }: param) => {
  const convertnumber = Number(params.id);
  const methodfind = data.find((items) => items.id === convertnumber);

  return (
    <div className="mb-24 bg-pink-100">
      <Navbar/>
      <div className="px-4 md:px-12 lg:px-44">
        <Image
          alt="dynamicimg"
          className="mx-auto mt-12 w-full max-w-[600px] rounded-sm h-[400px] object-cover"
          src={methodfind?.image || '/noting'}
          width={300}
          height={200}
        />
        <h1 className="text-center text-black font-bold text-2xl md:text-3xl pt-7">
          {methodfind?.name}
        </h1>
        <p className="text-gray-700 text-base md:text-xl text-justify p-4 pt-7">
          {methodfind?.description}
        </p>
        <Comments />
      </div>
    </div>
  );
};

export default page;



