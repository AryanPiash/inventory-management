import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner2.jpg';
import banner2 from '../../../images/banner/banner1.png';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height={600}
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Most populer laptop Mangement warehouse</h3>
                    <p>We have stocked and delivered many of items laptop in most populer Brand in this world.Any type of laptop can managable for us and quick deliver for client sasitfying.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Most populer laptop Mangement warehouse</h3>
                    <p>We have stocked and delivered many of items laptop in most populer Brand in this world.Any type of laptop can managable for us and quick deliver for client sasitfying.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img height={600}
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Most populer laptop Mangement warehouse</h3>
                    <p>We have stocked and delivered many of items laptop in most populer Brand in this world.Any type of laptop can managable for us and quick deliver for client sasitfying.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;