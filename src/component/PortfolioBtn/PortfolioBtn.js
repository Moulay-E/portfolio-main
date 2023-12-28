import Link from 'next/link';
import portfolioBtnImg from './../../asset/img/portfolioImgCover.webp';
import Image from 'next/image';

export default function PortfolioBtn() {
  const data = {
    title: 'Liens vers mes differents projets',
    description: 'Mes differents projets',
  };
  return (
    <div className=" max-w-full flex flex-col bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="font-semibold">Portfolio</h2>
      <Link href="/project" className="">
        <Image
          className="myImage "
          src={portfolioBtnImg}
          alt="different projet et un liens vers mes projets"
          //  layout="responsive"
          width={500}
          height={300}
        />
      </Link>
      <div className="flex flex-col justify-around flex-grow px-5 pb-5 ">
        <Link href="/project" className="">
          <p className="font-bold text-gray-900 dark:text-white">
            {' '}
            {data.title}{' '}
          </p>
        </Link>

        <div className="flex items-center justify-between self-center">
          <span className=" font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.description}
          </span>
        </div>
      </div>
    </div>
  );
}
