//component
import Navbar from '@/component/Navbar/Navbar';
import Footer from '@/component/Footer/Footer';
import Presentation from '@/component/Presentation/Presentation';
//style
import './../styles/style.css';
import './../app/globals.css';
import PortfolioBtn from '@/component/PortfolioBtn/PortfolioBtn';
import HeaderImg from '@/component/HeaderImg/HeaderImg';
import Gallery from '@/component/Project/Project';
import ContactForm from '@/component/FormSpree/FormSpree';
import MineCarrousel from '@/component/MineCarrousel/MineCarrousel';

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen m-0">
      <Navbar />
      <div className="h-16"></div>

      <main className="h-4/5 flex flex-col items-center bg-white ">
        <div className="w-4/5  flex flex-col justify-around h-full gap-y-16">
          <HeaderImg />
          <Presentation />
          <MineCarrousel />
          <Gallery />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
