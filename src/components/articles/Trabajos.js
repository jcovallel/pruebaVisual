import React from 'react'
import ReactDOM from 'react-dom';
import {loadableP5 as P5Wrapper} from '../../sketches/lodable';
import convolution from '../../sketches/convolution'
import Slider from 'react-rangeslider'
import { Accordion, AccordionItem } from 'react-light-accordion';
import PropTypes from 'prop-types'

class Trabajos extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        event.preventDefault()
        this.props.onOpenArticle('julio-ovalle');
    }
    render() {
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
                        <li style={{ paddingLeft: '18px' }}><a onClick={this.handleClick}> Demo </a></li>
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
