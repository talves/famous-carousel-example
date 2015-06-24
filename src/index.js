import famousCarousel from 'famous-carousel';
console.log('famousCarousel', famousCarousel)
import * as FamousCarousel from 'famous-carousel';
console.log('FamousCarousel', FamousCarousel);
import { Carousel } from 'famous-carousel';
console.log('Carousel', Carousel)
var CarouselClass = FamousCarousel.Carousel;
console.log('CarouselClass', CarouselClass)

import imageData from './data/data';

var carousel = new Carousel({
        selector: '.slideshow',
        carouselData: imageData,
        wrapAround: true,
        autoPlay: 3000,
        // autoSlidesToAdvance: 2,
        // manualSlidesToAdvance: 3,
        // initialIndex: 2,
        // dotForeColor: 'red',
        dotBackColor: 'DarkBlue',
        // dotOpacity: 0.7,
        // arrowFillColor: 'yellow',
        arrowOutlineColor: 'CornflowerBlue'
    });
