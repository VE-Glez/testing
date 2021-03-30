import React from "react";
import Styles from "../../styles/pages/frontendmentor/HLPWCSM.module.scss";
import IconMessages from "../../components/HLPWCSM/IconMessages";
import IconEmail from "../../components/HLPWCSM/IconEmail";
import Logo from "../../components/HLPWCSM/Logo";
import ScreenMockups from "../../components/HLPWCSM/ScreenMockups";
import IconCommunities from "../../components/HLPWCSM/IconCommunities";
import IllustrationFlowingConversation from "../../components/HLPWCSM/IllustrationFlowingConversation";
import IconPhone from "../../components/HLPWCSM/IconPhone";
import IllustrationGrowTogether from "../../components/HLPWCSM/IllustrationGrowTogether";
import IllustrationYourUsers from "../../components/HLPWCSM/IllustrationYourUsers";
import ButtonPrimary from "../../components/HLPWCSM/ButtonPrimary";

const HuddleLandingPageWithCurvedSectionsMaster = () => {
  return (
    <main>
    <IconCommunities className={Styles.fckIcon} />
      <ScreenMockups className={Styles.screenMockup} />
      
    </main>
  );
};

export default HuddleLandingPageWithCurvedSectionsMaster;
