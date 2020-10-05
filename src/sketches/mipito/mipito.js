import React, { useEffect, useState } from 'react'
import './mipito.scss'

export default function Mipito() {

    const fibonacci = (num) => {
        var a = 1, b = 0, temp;
        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }

    useEffect(() => {
        console.log(fibonacci(25));
    }, [])

    return (
        <h1 className="titulito">sajndasjkdnasjdk</h1>
    )
}
