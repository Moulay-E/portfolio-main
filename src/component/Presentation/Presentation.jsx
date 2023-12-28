import Image from 'next/image';
import imagePresentation from '@/asset/img/rougeCover.webp';

export default function Presentation() {
  return (
    // <div className="min-h-[800px] bg-slate-200 flex items-center ">
    <div className="max-w-full flex flex-col md:flex-row justify-center bg-slate-200 rounded-lg ">
      <div className="md:w-2/4 flex flex-col justfy-center items-center">
        <div className="w-3/4" id="presentation">
          <h2 className="mb-4 text-3xl font-poppins  text-black md:text-5xl lg:text-6xl">
            <span className="">A propos</span>
          </h2>
          <p className="text-lg font-normal text-black font-roboto lg:text-xl ">
            Bienvenue sur mon portfolio de développeur web ! Formée
            intensivement pendant 9 mois chez OpenClassrooms, je maîtrise React,
            Sass, Node.js et Redux, et je suis passionnée par la création
            d'applications web innovantes. Découvrez mes projets variés et
            contactez-moi pour des collaborations créatives. Toujours prête à
            explorer de nouvelles technologies, je suis ouverte à des
            opportunités passionnantes pour faire évoluer mon parcours
            professionnel.
          </p>
        </div>
      </div>
      <div className="md:w-2/4">
        <Image
          className=" w-full h-full md:rounded-r-lg object-cover md:mt-0 mt-10 rounded-lg"
          src={imagePresentation}
          alt="photo de moi et mon chat "
          width={500}
          height={300}
        />
      </div>
    </div>
    // </div>
  );
}
