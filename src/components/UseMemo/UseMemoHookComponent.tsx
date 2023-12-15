import React, {FC, useMemo, useState} from 'react';

type Props = {}

export const UseMemoHookComponent: FC<Props> = () => {

    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resultA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let num = 0
            while (num < 10000000) {
                num++
                Math.random()
            }
            temp *= i
        }
        return temp
    }, [a])

    let resultB = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= b; i++) {
            temp *= i
        }
        return temp
    }, [b])


    return (
        <div>
            <div><input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/></div>
            <div><input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)}/></div>

            <div>Result a: {resultA}</div>
            <div>Result b: {resultB}</div>

        </div>
    );
};