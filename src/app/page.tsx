import LinkCard from "./(components)/linkCard";
import { FaInstagram } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Image from "next/image";
import ShareModal from "./(components)/shareModal";

export const metadata = {
  title: "João Clevelares - Links",
  description: "Conecte-se com João",
  openGraph: {
    title: "João Clevelares - Links",
    description: "Conecte-se com João",
    url: "https://links.joaoclev.dev.br",
    siteName: "João - Links",
    images: [
      {
        url: "https://github.com/vortex2jm.png",
        width: 500,
        height: 500,
        alt: "Profile photo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-screen pt-10 pb-10 flex flex-col justify-center items-center">

      <div className="mb-10">
        <Image src={"/profile.png"} alt="profile photo" width={150} height={150} priority></Image>
      </div>

      <div className="flex flex-col justify-center items-center mb-10 text-cente">
        <h2 className="font-sans font-bold text-2xl">João Clevelares</h2>
        <div className="w-15 h-0.5 bg-[var(--destak)] mx-auto mt-1 rounded-full" />
      </div>

      <div className="h-fit w-m flex flex-col justify-center items-stretch rounded-xl gap-6">
        <LinkCard title="Soluções de Software" link="https://cyvex.com.br">
          <FaGear />
        </LinkCard>

        <LinkCard title="Website" link="https://joaoclev.dev.br">
          <BsGlobe />
        </LinkCard>

        <LinkCard title="LinkedIn" link="https://www.linkedin.com/in/joão-clevelares-287b04279">
          <FaLinkedin />
        </LinkCard>

        <LinkCard title="GitHub" link="https://github.com/vortex2jm">
          <FaGithub />
        </LinkCard>

        <LinkCard title="Instagram" link="https://instagram.com/joao_p_moura">
          <FaInstagram />
        </LinkCard>
      </div>

      <ShareModal />
    </div>
  );
}
