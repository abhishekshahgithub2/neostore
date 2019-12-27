import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

export class Democarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src="http://180.149.241.208:3022/2019-06-14T07-12-38.862Zbed.jpg" />
                    </div>
                    <div>
                        <img src="http://180.149.241.208:3022/2019-06-14T07-00-13.113Zwp2163483.jpg" />
                    </div>
                    <div>
                        <img src="http://180.149.241.208:3022/2019-06-14T07-16-18.267Ztable.jpg" />
                    </div>
                    <div>
                        <img src="http://180.149.241.208:3022/2019-06-28T05-38-01.778Zwardrobe-design-with-color-combination.jpeg" />
                    </div>
                    <div>
                        <img src="http://180.149.241.208:3022/2019-06-14T07-16-40.263Zsofa.jpg" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Democarousel
