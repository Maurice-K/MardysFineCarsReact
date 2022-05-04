import Header from './Header';
import Calculator from './Calculator';
import Cars from './Cars';
import { Stack } from '@mui/material';
import useCars from '../hooks/useCars';
import { useState } from 'react';

function Home() {
  const [filteredCars, setFilteredCars] = useState([]);
  const cars = useCars();

  console.log(cars);

  const getCarListByPrice = (cash) => {
    setFilteredCars(
      cars
        .filter((car) => car.price <= cash)
        .sort((a, b) => {
          return b.price - a.price;
        })
    );
  };

  return (
    <Stack>
      <Header />
      <Calculator onSubmitCash={getCarListByPrice} />
      <Cars cars={filteredCars} />
    </Stack>
  );
}

export default Home;
