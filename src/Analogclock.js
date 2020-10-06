import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function Analogclock(props) {
    let time = new Date(props.time);
    console.log(time.getHours(), 'Analog', (time.getHours()/30) * 360 - 90);

    let divclock = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    let clockContainer = {
        width: 250,
        height: 250,
        borderRadius: 20000,
        // borderStyle: "solid",
        // borderColor: "red",
        border: '40px solid #cddc39',
        backgroundColor: ''

    }

    let secondHand = {
        position: 'relative',
        top: -8,
        left: 123,
        border: '1px solid red',
        width: 120,
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red',
        zIndex: '-1'
    }

    let minuteHand = {
        position: 'relative',
        top: -14,
        left: 123,
        border: '2px solid #cddc39',
        width: 90,
        height: 3,
        borderRadius: '10px',
        // transform: 'rotate(' + ((time.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
        transform: `rotate(${((time.getMinutes() / 60) * 360 - 90).toString()}deg)`,
        transformOrigin: '0% 0%',
        backgroundColor: '#cddc39',
        zIndex: '-1'
    }

    let hourHand = {
        position: 'relative',
        top: -21,
        left: 131,
        border: '2px solid #cddc39',
        width: 80,
        height: 6,
        transform: 'rotate(' + ((time.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: '#cddc39',
        borderRadius: '10px',
        zIndex: '-1'
    }

    return (
        <div style={divclock}>
            <Container style={clockContainer}>
            <p className="p12">12</p>
            <p className="p1">1</p>
            <p className="p2">2</p>
            <p className="p3">3</p>
            <p className="p4">4</p>
            <p className="p5">5</p>
            <p className="p6">6</p>
            <p className="p7">7</p>
            <p className="p8">8</p>
            <p className="p9">9</p>
            <p className="p10">10</p>
            <p className="p11">11</p>
            <div className="divmin"></div>
                <div style={secondHand}></div>
                <div style={minuteHand}></div>
                <div style={hourHand}></div>
            </Container>
        </div>
    )
}

export default Analogclock;