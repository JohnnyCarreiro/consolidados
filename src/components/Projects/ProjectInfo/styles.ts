import styled from 'styled-components'

type RowProps = {
  imgStart?: boolean;
}
type TextProps = {
  lightText?: boolean;
}
type SubtitleProps = {
  darkText?: boolean;
}

export const InfoRow = styled.div<RowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  height: 100%;
  align-items: start;
  grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};
  /* grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col2 col1 col1'` : `'col1 col1 col2'` )}; */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: ${({theme}) => theme.colors.primary};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h2<TextProps>`
  margin-top: 24px;
  font: ${({theme}) => theme.texts.title};
  line-height: 1.1;
  color: ${({lightText = false}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const Subtitle = styled.p<TextProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font: ${({theme}) => theme.texts.main_text};
  line-height: 1.5rem;
  margin-top: 1rem;
  color: ${({lightText = false}) => (lightText ? '#f7f8fa' : '#010606')};
`
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrapper =styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img =styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
