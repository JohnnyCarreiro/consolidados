import styled from 'styled-components'
import {Link as LinkS,} from 'react-scroll'

interface Props {
  primary?: boolean
  big?: boolean
  dark?: boolean
  fontBig?: boolean
}

export const Button = styled(LinkS)<Props>`
  border-radius: 50px;
  background: ${({primary = false})=> (primary ? ({theme}) => theme.colors.primary : ({theme}) => theme.colors.secondary)};
  white-space: nowrap;
  padding: ${({big = false})=> (big ? '14px 48px' : '12px 30px')};
  color: ${({dark = false})=> (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig = false})=> (fontBig ? '1.25rem' : '1rem')};
  outline: none;
  border: 1px solid ${({primary = false})=> (primary ? ({theme}) => theme.colors.primary : ({theme}) => theme.colors.secondary)};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({primary = false})=> (primary ?  ({theme}) => theme.colors.primary : ({theme}) => theme.colors.secondary)};
    background: transparent;
    border:  1px solid ${({primary = false})=> (primary ?  ({theme}) => theme.colors.primary : ({theme}) => theme.colors.secondary)};
  }
`
