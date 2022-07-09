import React from "react"
import { InputWrapper, Input, Button, IconContainer } from "./styles"
import { SearchIcon } from "@heroicons/react/solid"

interface SearchInputProps {
  handleClick: any
}


const SearchInput = React.forwardRef(({handleClick}:SearchInputProps, ref?: React.Ref<HTMLInputElement>)=>{
  return(
    <InputWrapper>
      <Input type="text" name="" id="" ref={ref} />
      
      <Button title="test" onClick={handleClick}>
        <IconContainer>
          <SearchIcon color="white"  height={30}/>
        </IconContainer>
          
      </Button>
    </InputWrapper>
    
  )
})

export {SearchInput}
