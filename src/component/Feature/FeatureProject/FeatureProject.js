import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FeatureProject({ arr }) {
  if (!arr) {
    console.error('arr is not provided');
    return null;
  }

  if (!arr.cover || !arr.title || !arr.description || !arr.tags) {
    console.error('One or more required fields are missing in arr', arr);
    return null;
  }

  const [showFullDescription, setShowFullDescription] = useState(false);

  const briefDescriptionLength = 100;
  const briefDescription =
    arr.description.length > briefDescriptionLength
      ? ` ${arr.description.substring(0, briefDescriptionLength)}... `
      : arr.description;

  return (
    <div>
      <div className=" max-w-full h-full flex flex-col bg-white border rounded-lg shadow border-gray-700">
        <h2 className=" bg-slate-200 border border-gray-300 text-xl font-semibold tracking-tight text-gray-900 ">
          {' '}
          {arr.title}{' '}
        </h2>
        <Link href={arr.link} target="_blank" rel="noopener noreferrer">
          <Image
            className="myImage rounded-t-lg "
            src={arr.cover}
            alt="une image d'un de mes projet et le liens vers celui ci"
            width={500}
            height={300}
          />
        </Link>

        <div className=" pb-0 flex flex-col justify-around flex-grow px-5 pb-5 ">
          <h3 className=" min-height font-semibold tracking-tight text-gray-900 ">
            {' '}
            {arr.subtile}{' '}
          </h3>

          <div className="flex items-center justify-between self-center">
            <p className=" text-gray-900 text-base font-normal  mt-4 ">
              {showFullDescription ? arr.description : briefDescription}
            </p>
          </div>

          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            {showFullDescription ? 'Voir moins' : 'Voir plus'}
          </button>

          <div className="flex items-center mt-2.5 mb-5 self-center justify-around">
            <p>
              {arr.tags.map((tag, index) => (
                <span
                  key={index}
                  className=" text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-slate-600 text-white"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="bg-slate-200 mb-0 w-full h-10"></div>
      </div>
    </div>
  );
}
