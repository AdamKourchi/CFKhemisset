import Header from "@/components/Header.jsx";
import EtaMap from "@/components/EtaMap.jsx";
import Secteurs from "@/components/Secteurs.jsx";
import Chiffres from "@/components/Chiffres.jsx";
import Details from "@/components/Details.jsx";
import FooterWithLogo from "@/components/FooterWithLogo.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <EtaMap />
      <Secteurs />
      <Chiffres />
      <Details />
      <FooterWithLogo />
    </>
  );
}
