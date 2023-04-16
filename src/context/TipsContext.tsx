import React, { createContext, useState } from 'react';

interface TipState {
  bill: number;
  tipPercentage: number;
  people: number;
  tipAmount: number;
  total: number;
}

interface TipContextState {
  tipState: TipState;
  onChangeState: <K extends Object>(value: K, field: keyof TipState) => void;
  reset: () => void;
}

export const TipContext = createContext({} as TipContextState);

interface TipProviderProps {
  children: React.ReactNode;
}

const INITIAL_STATE: TipState = {
  bill: 0,
  tipPercentage: 0,
  people: 0,
  tipAmount: 0,
  total: 0,
};

export const TipProvider: React.FC<TipProviderProps> = ({ children }) => {
  const [tipState, setTipState] = useState(INITIAL_STATE);

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

  return (
    <TipContext.Provider
      value={{
        tipState,
        onChangeState,
        reset,
      }}>
      {children}
    </TipContext.Provider>
  );
};
