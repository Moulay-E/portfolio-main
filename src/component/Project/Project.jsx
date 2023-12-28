'use client';
import { useState } from 'react';
import FeatureProject from '../Feature/FeatureProject/FeatureProject';
import { projectData } from '../../data/projectData';

// use client
export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="projet" id="project">
      <div className="h-12 flex justify-center items-center">
        <h2 className="text-xl font-extrabold  md:text-2xl lg:text-3xl font-poppins">
          Projet
        </h2>
      </div>
      <div className="max-w-full flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max">
          {projectData.map((element, i) => {
            if (i < 2 || isVisible) {
              return <FeatureProject key={i} arr={element} />;
            }
            return null;
          })}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="font-poppins mt-4 px-4 py-2 bg-slate-200 text-white rounded bg-custom-gradient transition-transform hover:scale-105 "
      >
        {isVisible ? 'Réduire  les projets' : 'Afficher tous les projets'}
      </button>
    </div>
  );
}
