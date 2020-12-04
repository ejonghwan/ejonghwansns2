import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types'
import PlusOutlined from './PlusOutlined'
import ImagesZoom from './imagesZoom/index'

const PostImages = ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false)
    }, [])


    if(images.length === 1) {
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }

    if(images.length === 2) {
        return (
            <>
                <img role="presentation" style={{width:"49%"}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{width:"49%"}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }

    return (
        <>
        <div>
            <img role="presentation" style={{width:"49%"}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
            <div
                roloe="presentation"
                style={{display: "inline-block", width: "50%", textAlign:"center", verticalAlign:"middle",}}
                onClick={onZoom}
            >
                <PlusOutlined />
                <br />
                {images.length -1}개의 사진 더보기
            </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    );
};

PostImages.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages;