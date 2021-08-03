import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
 
export const Sample = () => {
    const images = [
        {
          original: '/mizuirono-madowaku/img/1.jpg',
          thumbnail: '/mizuirono-madowaku/img/1.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/2.jpg',
          thumbnail: '/mizuirono-madowaku/img/2.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/3.jpg',
          thumbnail: '/mizuirono-madowaku/img/3.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/4.jpg',
          thumbnail: '/mizuirono-madowaku/img/4.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/5.jpg',
          thumbnail: '/mizuirono-madowaku/img/5.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/6.jpg',
          thumbnail: '/mizuirono-madowaku/img/6.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/7.jpg',
          thumbnail: '/mizuirono-madowaku/img/7.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/8.jpg',
          thumbnail: '/mizuirono-madowaku/img/8.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/9.jpg',
          thumbnail: '/mizuirono-madowaku/img/9.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/10.jpg',
          thumbnail: '/mizuirono-madowaku/img/10.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/11.jpg',
          thumbnail: '/mizuirono-madowaku/img/11.jpg',
        },
        {
          original: '/mizuirono-madowaku/img/12.jpg',
          thumbnail: '/mizuirono-madowaku/img/12.jpg',
        },
      ];
    return (
        <ImageGallery items={images} />
    )
}
  
export default Sample