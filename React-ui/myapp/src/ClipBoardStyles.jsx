import styled from "styled-components";
export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-image: url("./assets/bg-header-desktop.png");
  background-repeat: no-repeat;
  height: 100vh;
  font-size: 18px;
`;
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  margin: 150px;
  margin-bottom: 15px;
`;
export const MainContainerHeading = styled.h1`
  margin-bottom: 0px;
  max-width:100%;
  text-wrap:balance;
  text-align:center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 480px){
    flex-direction:column;
  }
`;
export const CommonButton = styled.button`
  color: white;
  border: none;
  height: 40px;
  border-radius: 25px;
  width: 150px;
  font-weight: bold;
`;
export const IosButton = styled(CommonButton)`
  background-color: #24bda4;
`;
export const MacButton = styled(CommonButton)`
  background-color: #6173fe;
  box-shadow: 0px 4px 6px rgba(97, 115, 254, 0.2);
`;
export const MainContainerPara = styled.p`
  color: hsl(210, 10%, 33%);
  max-width: 600px;
  text-align: center;
  font-weight: 600;
  line-height: 1.5;
  font-weight: 400;
`;
export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:0px;
  max-width:100%;
`;
export const SecondSectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  @media (max-width: 480px){
    max-width:78%;
    text-align:center;
    text-wrap:wrap;
  }
`;
export const SecondSectionDivison = styled.div`
  display: flex;
  margin-top: 50px;
  overflow:hidden;
  max-width:100%;
  @media (max-width: 480px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
`;
export const SecondSectionDivisionImgCon = styled.div`
 width: 80%;
 margin-left:0px;
 @media(max-width:480px){
  width:100px;
  text-align:center;
}
`;
export const SecondSectionDivisionImg = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: calc(100vh - 100px); 
  margin-left: -5%;
  @media(max-width:480px){
    margin-left:0px;
    max-height: 50vh;
    max-width:50%;
  }
`;


export const FeatureWrapper = styled.div`
`;
export const FeatureWrapperItems = styled.div``;
export const FeatureWrapperPtag = styled.p`
  max-width: 380px;
  line-height: 1.8;
`;
export const FourthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px;
`;
export const FourthSectionDivison = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  max-width:100%;
  @media (max-width: 480px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
`;
export const FourthDivisonItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
export const FourthDivisionItemPtag = styled.p`
  max-width: 380px;
  text-align: center;
  line-height: 1.5;
`;
export const StyledPara = styled.p`
  color: hsl(210, 10%, 33%);
  max-width: 680px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400px;
`;
export const ThirdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  max-width:100%;
`;
export const StyledHeading = styled.h2`
  font-weight: 600px;
  text-align: center;
`;
export const ThirdSectionHeading = styled.h2`
  text-align: center;
  margin-top: 50px;
`;
export const ThirdSectionPtag = styled.p`
  max-width: 600px;
  text-align: center;
  margin-left: 110px;
  margin-bottom: 100px;
  line-height: 1.5;
`;
export const ThirdSectionImg = styled.img`
  text-align: center;
`;
export const BrandSection = styled.div`
  display: flex;
  margin: 80px;
  gap: 80px;
  justify-content: center;
  align-items: center;
  max-width:100%;
  @media (max-width: 480px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
`;
export const DownloadSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 150px;
  text-align:center;
  max-width:100%;
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: hsl(220, 18%, 97%);
  color: grey;
  max-width:100%;
  @media (max-width: 480px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
`;
export const FooterLogo = styled.svg`
  font-size: 10px;
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;