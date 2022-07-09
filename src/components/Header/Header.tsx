import React from "react"
import {
  Bold,
  HeaderWrapper, Title
} from "./styles"

const Header: React.FC = () => {
  return(
    <HeaderWrapper>
      <Title><Bold>GitHub</Bold> Finder</Title>
    </HeaderWrapper>
  )
}
export {Header}