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

function InfoSection() {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Columna1>
              <TextWrapper>
                <TopLine> Linea de texto superior </TopLine>
                <Heading> Cabecera </Heading>
                <Subtitle>Subtitulo</Subtitle>
                <BtnWrapper>
                  <Button to="home"></Button>
                </BtnWrapper>
              </TextWrapper>
            </Columna1>
            <Columna2>
              <ImgWrapper></ImgWrapper>
              <Img />
            </Columna2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
