import React from "react"
import { Header } from "../../components/Header/Header"
import { Body } from "../../components/Body/Body"
import { Footer } from "../../components/Footer/Footer"
import { Wrapper } from "./styles"

const Home: React.FC = () => {
  return(
    <Wrapper>
      {/* Header */}
      <Header />

      {/* Body */}
      <Body />
        {/* SearchBox */}
        {/* results */}
      {/* Footer */}
      {/* <Footer /> */}
    </Wrapper>
  )
}

export {Home}