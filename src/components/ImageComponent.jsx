import React from 'react'
import './css/ImageComponent.css'

const ImageComponent = ({ src, alt }) => (
  <div className="image-container">
    <img src={src} alt={alt} />
  </div>
)

export default ImageComponent
