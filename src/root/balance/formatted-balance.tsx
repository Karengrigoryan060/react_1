import React from 'react';

interface Props {
  amount: number;
}

export const FormattedBalance = (props: Props) => {
  const amount = props.amount;

  return (
    <h1>{amount.toFixed(2)}</h1>
  );
};