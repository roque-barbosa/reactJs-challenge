import React from "react"
import { CardWrapper, IconWrapper, Message } from "./styles"
import {ArrowNarrowRightIcon} from "@heroicons/react/solid"

interface ICommitCard {
  message: string
}

export const CommitCard: React.FC<ICommitCard> = ({message}) => {
  return(
    <CardWrapper>
      <IconWrapper>
        <ArrowNarrowRightIcon height={20}/>
      </IconWrapper>
      <Message>{message}</Message>
    </CardWrapper>
  )
}