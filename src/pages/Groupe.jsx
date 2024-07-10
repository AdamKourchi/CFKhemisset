import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import HeaderGroup from "../components/HeaderGroup";
import GroupPage from "../components/GroupPage";
import GroupCalendary from "../components/GroupCalendary";
import FooterWithLogo from "@/components/FooterWithLogo.jsx";


export default function Groupe() {
  const { name ,group} = useParams();

  const [groupData, setGroupData] = React.useState({eta:{},group:{}});



  React.useEffect(() => {
    const establishment = data.find((item) => item.name === name);
    const groupInfo = establishment?.groupes.find((item) => item.name === group);

    setGroupData({ eta: establishment, group: groupInfo });
  }, []);

  return (
    <>
      <HeaderGroup  groupData={groupData} />
      <GroupPage groupData={groupData} />
      <GroupCalendary groupData={groupData} />
      <FooterWithLogo />

    </>
  );
}
