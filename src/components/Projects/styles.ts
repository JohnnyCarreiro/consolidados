import styled from 'styled-components'

type ContainerProps = {
  lightBg?: boolean;
}
type TextProps = {
  lightText?: boolean
}

export const ProjectContainer = styled.div<ContainerProps>`
  color: ${({lightBg = false}) => (lightBg ? ({theme}) => theme.colors.gray_300 : ({theme}) => theme.colors.gray_900)};
  background: ${({lightBg = false}) => (lightBg ? '#f9f9f9' : ({theme}) => theme.colors.gray_200)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  div > &+:not(:last-child) {
    margin-bottom: 64px;
  }
`
export const ProjectWrapper = styled.div `
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px 196px 24px;
  justify-content:center;
`
export const HeadingContainer = styled.div `
  padding-top: 32px;
  margin-bottom: 64px;
  text-align: center;
  *:not(:last-child) {
    margin-bottom: 32px;
  }
`
export const Heading = styled.div<TextProps>`
  font: ${({theme}) => theme.texts.main_title};
  color: ${({lightText = false}) => (lightText ? '#f7f8fa' : '#010606')};
`
export const Text = styled.div<TextProps>`
  font: ${({theme}) => theme.texts.main_text};
  color: ${({lightText = false}) => (lightText ? '#f7f8fa' : '#010606')};
`

