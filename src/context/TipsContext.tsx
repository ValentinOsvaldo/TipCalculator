import React, { createContext, useState, useEffect } from 'react';

interface TipState {
  bill: string | number;
  tipPercentage: string | number;
  people: string | number;
  tipAmount: string | number;
  total: string | number;
  customTip: string;
}

interface TipContextState {
  tipState: TipState;
  error?: string;
  onChangeState: <K extends Object>(value: K, field: keyof TipState) => void;
  reset: () => void;
}

export const TipContext = createContext({} as TipContextState);

interface TipProviderProps {
  children: React.ReactNode;
}

interface CalculateTip {
  bill: string;
  tipPercentage: string;
  people: string;
}

const INITIAL_STATE: TipState = {
  bill: '',
  tipPercentage: '5',
  people: '',
  tipAmount: '0',
  total: '0',
  customTip: '',
};

export const TipProvider: React.FC<TipProviderProps> = ({ children }) => {
  const [tipState, setTipState] = useState(INITIAL_STATE);
  const [error, setError] = useState<string>();
  const { bill, customTip, people, tipPercentage } = tipState;

  const onChangeState = <K extends Object>(
    value: K,
    field: keyof TipState,
  ): void => {
    setTipState(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = (): void => {
    setTipState(INITIAL_STATE);
  };

  const calculateTip = ({ bill, people, tipPercentage }: CalculateTip) => {
    if ([bill, people, tipPercentage].every(value => value.length === 0))
      return;

    const peopleFloat: number = parseInt(people);
    const billFloat: number = parseFloat(bill);

    if (isNaN(peopleFloat) || isNaN(billFloat) || isNaN(+tipPercentage)) return;
    if (peopleFloat === 0 || billFloat === 0) return;

    let tipAmount =
      (billFloat * (parseFloat(tipPercentage) / 100)) / peopleFloat;
    tipAmount = +tipAmount.toFixed(2);

    const total: number = +(parseFloat(bill) / peopleFloat + tipAmount).toFixed(
      2,
    );

    setTipState(prev => ({
      ...prev,
      tipAmount,
      total,
    }));
  };

  useEffect(() => {
    let tip: string | number;
    customTip === '' ? (tip = tipPercentage) : (tip = customTip);

    calculateTip({
      bill: `${bill}`,
      people: `${people}`,
      tipPercentage: `${tip}`,
    });
  }, [bill, tipPercentage, people, customTip]);

  return (
    <TipContext.Provider
      value={{
        tipState,
        onChangeState,
        reset,
        error,
      }}>
      {children}
    </TipContext.Provider>
  );
};
