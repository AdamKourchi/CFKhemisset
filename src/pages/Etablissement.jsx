import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import HeaderEta from "../components/HeaderEta";
import ActualitesEta from "../components/ActualitesEta";
import GroupsEta from "../components/GroupsEta";
import FooterWithLogo from "@/components/FooterWithLogo.jsx";

export default function Etablissement() {
  const { name } = useParams();
  const [etablissement, setetablissement] = React.useState(data[0]);

  React.useEffect(() => {
    setetablissement(data.find((item) => item.name === name));
  }, []);

  return (
    <>
      <HeaderEta eta={etablissement} />
      <ActualitesEta eta={etablissement} />
      <GroupsEta eta={etablissement} />
      <FooterWithLogo />
    </>
  );
}
