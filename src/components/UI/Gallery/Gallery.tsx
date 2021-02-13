import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import { IGalleryItem } from './models/GalleryItem'
import { IGalleryModel } from './models/IGalleryModel'

interface IGalleryProps {
    images: IGalleryModel
}
interface IGalleryState {
    activeFolder: number
    activeSubFolder: number
}


class Gallery extends React.PureComponent<IGalleryProps, IGalleryState> {

    handleButtonClick = (index: number) => {
        this.setState({
            ...this.state,
            activeFolder: index
        })
    }
    handleSubButtonClick = (index: number) => {
        this.setState({
            ...this.state,
            activeSubFolder: index
        })
    }
    render() {
        const buttons: JSX.Element[] = this.props.images.Folders.map((folder, index) => {
            return (
                <button
                    key={index}
                    onClick={() => this.handleButtonClick(index)}
                >
                    {folder.Name}
                </button>
            )
        })
        let subButtons: JSX.Element[] | undefined = undefined
        if (this.state?.activeFolder >= 0) {
            subButtons = this.props.images.Folders[this.state.activeFolder].Folders.map((folder, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => this.handleSubButtonClick(index)}
                    >
                        {folder.Name}
                    </button>
                )
            })
        }
        let gallery: JSX.Element | undefined = undefined
        if (this.state?.activeSubFolder >= 0) {
            const images: IGalleryItem[] = this.props.images.Folders[this.state.activeFolder].Folders[this.state.activeSubFolder].Files.map(file => {
                return {
                    original: file.Path
                }
            })
            gallery = (
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    showBullets={true}
                />
            )
        }
        return (
            <div className="gallery">
                <div className="gallery_Nav">
                    {buttons}
                </div>
                <div className="gallery_Nav">
                    {subButtons}
                </div>
                <div
                    style={
                        {
                            maxHeight: '50vh',
                            maxWidth: '50vw'
                        }
                    }>
                    {gallery}
                </div>
            </div>
        )
    }
}

export default Gallery