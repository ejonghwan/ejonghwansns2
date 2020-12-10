import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Slick from 'react-slick'

import { Overlay, Header, SlickWrapper, ImgWrapper, Indicator, CloseBtn, Global} from './style'



const ImagesZoom = ({images, onClose}) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <Overlay className="asdasd">
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
            
                <div>
                    <Slick 
                        initialSlide={0}
                        beforeChange={(slide) => {setCurrentSlide(slide)}}
                        infinite
                        arrows={false}
                        slidesToscroll={1}
                    >
                    
                        {images.map(val => (
                            <ImgWrapper key={val.src}>
                                <img src={val.src} alt={val.src}/>
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '} / {' '}
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            
            </SlickWrapper>
        </Overlay>
    );
};

ImagesZoom.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ImagesZoom;