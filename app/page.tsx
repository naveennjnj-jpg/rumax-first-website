import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CareCta } from "@/components/common/CareCta";
import { ServiceSwitchModal } from "@/components/common/ServiceSwitchModal";
import { Compliance } from "@/components/home/Compliance";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";
import { Reviews } from "@/components/home/Reviews";
import { Services } from "@/components/home/Services";
import { TeamVideos } from "@/components/home/TeamVideos";
import { Trust } from "@/components/home/Trust";

export default function HomePage() {
  return (
    <>
      <Header />
       <ServiceSwitchModal switchHref="https://rumax-second-frontend.vercel.app/" />
      <main className="home-page">
        <Hero />
        <Services />
        <Compliance />
        <Trust />
        <Reviews />
        <TeamVideos />
        <CareCta />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
