import React from "react";
import { Button } from "react-scroll";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Columna1,
  Columna2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Img,
  ImgWrapper,
} from "./infoElements";

function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  alt,
  img,
  darkText 
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Columna1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button to="home">{buttonLabel}</Button>
                </BtnWrapper>
              </TextWrapper>
            </Columna1>
            <Columna2>
              <ImgWrapper></ImgWrapper>
              <Img src={img} alt={alt} />
            </Columna2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
