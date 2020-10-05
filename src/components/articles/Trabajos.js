import React, { useState, useEffect } from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import Mipito from '../../sketches/mipito/mipito'

function Trabajos() {
    const [demoVisible, setDemoVisible] = useState(false)
    const switchDemo = () => {
        setDemoVisible(!demoVisible);
    }

    return (
        <div>
            <p>En esta seccion encontrara todo los talleres y trabajos de la asignatura.</p>
            <h3>Taller 1</h3>
            <Accordion atomic={true}>

                <AccordionItem title="Escala de grises: promedio rgb y luma">
                    <li style={{ paddingLeft: '18px' }}><a href="#"> Informe </a></li>
                    <li style={{ paddingLeft: '18px' }}><a href="#"> Demo </a></li>
                </AccordionItem>

                <AccordionItem title="Máscaras de convolución">
                    <li style={{ paddingLeft: '18px' }}><a href="#"> Informe </a></li>
                    <li style={{ paddingLeft: '18px', cursor: 'pointer' }}><a onClick={switchDemo}> Demo </a></li>
                    {
                        demoVisible &&
                        <Mipito />
                    }
                </AccordionItem>

                <AccordionItem title="Histograma y Segmentación">
                    <DummyContent />
                </AccordionItem>

                <AccordionItem title="Medición de la eficiencia computacional (Video)">
                    <DummyContent />
                </AccordionItem>

            </Accordion>
        </div>
    )

}

const DummyContent = () => (
    <p style={{ padding: '18px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
);

export default Trabajos
