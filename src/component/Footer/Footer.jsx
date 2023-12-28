import Image from 'next/image';
import logo from '@/asset/img/portfolioImgLogo.png';
import Link from 'next/link';
import linkedinIcon from '@/asset/img/linkedinIcon.png';
import mailIcon from '@/asset/img/mailIcon.png';
import githubIcon from '@/asset/img/githubIcon.png';

export default function Footer() {
  return (
    <footer className="colorGris  0  mt-16" id="contact">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mx-12">
          <span className="font-poppins self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Réseaux
          </span>

          <div className="  flex mt-4 space-x-5 justify-center sm:mt-0 gap-6 ">
            <Link
              href="#"
              className="h-[35px] w-[35px] border-2 bg-white text-gray-500 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                className="w-full h-full  object-cover "
                alt="linkedin logo and link"
                width={35}
                height={35}
              />
              <span className="sr-only">linkedin</span>
            </Link>
            <Link
              href="#"
              className=" h-[35px] w-[35px] border-2 bg-white text-gray-500 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt="Mail logo and link"
                className="w-full h-full  object-cover "
                width={35}
                height={35}
              />
              <span className="sr-only">github</span>
            </Link>
            <Link
              href="#"
              className=" h-[35px] w-[35px] text-gray-500 border-2 bg-white transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={mailIcon}
                alt="Github logo and link"
                className="w-full h-full  object-cover "
                width={35}
                height={35}
              />
              <span className="sr-only">eMail account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
