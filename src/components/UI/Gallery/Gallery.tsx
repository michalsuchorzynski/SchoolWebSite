import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import { IGalleryItem } from './models/GalleryItem'

interface IGalleryProps {
    images: IGalleryItem[]
}


class Gallery extends React.PureComponent<IGalleryProps> {
    render() {
        return <ImageGallery items={this.props.images} />
    }
}

export default Gallery