import { Button } from 'flowbite-react';

export const Btn = ({btnText, className, handleFunction}) => {

const onClick = () => {
    handleFunction()
}

  return (
    <Button color="info" className={className} onClick={onClick}>
      {btnText}
    </Button>
    
  )
}
