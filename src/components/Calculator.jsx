import { useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import './Calculator.css'

const Calculator = ({ onSubmitCash }) => {
  let [cash, setCash] = useState('');

  const onSubmitCashOnHand = (event) => {
    event.preventDefault();
    onSubmitCash(cash);
  };

  return (
    <form onSubmit={onSubmitCashOnHand} className='calculator'>
      <Container maxWidth='sm'>
      <Stack>
        <TextField
          label='Enter price here'
          type='number'
          variant='outlined'
          value={cash}
          onChange={(e) => {
            setCash(e.target.value);
          }}
        />
        <Button variant='contained' onClick={onSubmitCashOnHand}>
          Find My Car
        </Button>
      </Stack>
      </Container>

    </form>
  );
};

export default Calculator;
