import React, { useState } from 'react';
import { FormattedBalance } from './formatted-balance';

interface Props {
}

export const Balance = () => {
  // Preferrable form (array destructuring)
  // const [amount, setAmount] = useState(10);

  const controls = useState(10);

  const amount = controls[0];
  const setAmount = controls[1];

  const increment = (amount: number) => () => {
    setAmount(amount);
  };

  return (
    <div>
      <button onClick={increment(20)}>Add 10</button>
      <FormattedBalance amount={amount} />
    </div>
  );
};

