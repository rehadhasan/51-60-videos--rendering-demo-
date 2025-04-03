"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTheme} from "@/components/ThemeProvider";
import {ClientSideFunction} from "@/utils/client-utils";

export default function ClientRoute() {
    const Theme = useTheme();
    const result = ClientSideFunction();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <h1 style={{
                color: Theme.colors.secondary,
            }}>React Carousel {result}</h1>
            <div className="image-slider-container">
                <Slider {...settings}>
                    <div className="slick-item">
                        <img src="https://picsum.photos/id/237/200/300"/>
                    </div>
                    <div className="slick-item">
                        <img src="https://picsum.photos/seed/picsum/200/300"/>
                    </div>
                    <div className="slick-item">
                        <img src="https://picsum.photos/200/300?grayscale"/>
                    </div>
                    <div className="slick-item">
                        <img src="https://picsum.photos/200/300/?blur"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
}