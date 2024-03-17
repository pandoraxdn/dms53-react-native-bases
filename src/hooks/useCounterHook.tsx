import { useState } from 'react';

interface Data{
    count: number;
}

interface UseCounterHook{
    valor: Data;
    add: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCounterHook = ( info: Data ): UseCounterHook => {

    const [ valor, setValor ] = useState(info);

    const add = (): void => {
        setValor({ count: valor.count + 1 });
    }

    const decrement = (): void => {
        setValor({count: (valor.count == 0) ? 0 : valor.count - 1 });
    }

    const reset = (): void => {
        setValor(info);
    }

    return{ valor, add, decrement, reset };
}
