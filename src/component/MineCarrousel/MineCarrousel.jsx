import { competenceData } from '@/data/competenceData';
import Image from 'next/image';
import '@/styles/style.css';

export default function MineCarrousel() {
  return (
    <div className=" overflow-hidden py-14  whitespace-nowrap bg-slate-200 rounded-lg">
      <h2 className="text-black mb-12 text-3xl font-poppins  ">Compétences</h2>
      <div className="paused  gap-10 animateIcon ">
        {competenceData.map((element, i) => {
          return (
            <span className="inline-block text-center ">
              <Image
                key={i}
                className="w-20 h-20 inline-block ml-0 mr-10  "
                src={element.img}
                alt="technologie web image"
                width={200}
                height={200}
              />
              <p className="text-black mr-10 mt-1 text-lg font-normal font-roboto md:text-xl">
                {element.title}
              </p>
            </span>
          );
        })}
        {competenceData.map((element, i) => {
          return (
            <span className="inline-block text-center ">
              <Image
                key={i}
                className="w-20 h-20 inline-block ml-0 mr-10  "
                src={element.img}
                alt="technologie web image"
                width={200}
                height={200}
              />
              <p className="text-black mr-10 mt-1 text-lg font-roboto md:text-xl ">
                {element.title}
              </p>
            </span>
          );
        })}
      </div>
    </div>
  );
}
