import React from 'react';
import data from '../../../Data/data';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../component/Navbar';

const page = () => {
  return (
    
    <div className="container mx-auto bg-pink-100">
    <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 mt-12">
        {data.map((username) => {
          return (
            <div
              key={username.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/users/${username.id}`}>
                <div>
                  <Image
                    className="rounded-t-lg"
                    alt="blog card"
                    src={username.image}
                    width={400}
                    height={400}
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold truncate">{username.name}</h1>
                    <p className="text-sm text-gray-600 truncate">{username.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;




