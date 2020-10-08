import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function Analogclock(props) {
    let time = new Date(props.time);
    console.log(time.getHours(), 'Analog', (time.getHours() / 30) * 360 - 90);




    let clockContainer = {
        width: 150,
        height: 150,
        borderRadius: 20000,
        // borderStyle: "solid",
        // borderColor: "red",
        border: '2px solid #697689',
        backgroundColor: 'white'

    }

    let secondHand = {
        position: 'relative',
        top: -10,
        left: 77,
        border: '1px solid red',
        width: 100,
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red',
        zIndex: '-1'
    }

    let minuteHand = {
        position: 'relative',
        top: -11,
        left: 75,
        border: '2px solid #cddc39',
        width: 110,
        height: 3,
        borderRadius: '10px',
        // transform: 'rotate(' + ((time.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
        transform: `rotate(${((time.getMinutes() / 60) * 360 - 90).toString()}deg)`,
        transformOrigin: '0% 0%',
        // backgroundColor: '#cddc39',
        zIndex: '-1'
    }

    let hourHand = {
        position: 'relative',
        top: -25,
        left: 75,
        border: '2px solid #cddc39',
        width: 95,
        height: 6,
        transform: 'rotate(' + ((time.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: '#cddc39',
        borderRadius: '10px',
        zIndex: '-1'
    }

    return (
        <div className="divclock">
            <div className="divnum">
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
                <Container style={clockContainer}>
                    <h5>SHADAB</h5>
                    <div className="divmin"></div>
                    <div style={secondHand}></div>
                    <div style={minuteHand}></div>
                    <div style={hourHand}></div>
                </Container>
            </div>
        </div>
    )
}

export default Analogclock;