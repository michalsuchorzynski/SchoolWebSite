import React from 'react'
import Gallery from '../../components/UI/Gallery/Gallery'
import { IGalleryItem } from '../../components/UI/Gallery/models/GalleryItem'


const images: IGalleryItem[] = [
    {
        original: 'public/gallery/2020/DobrzeZiemio/1.jpg',
    },
    {
        original: 'public/gallery/2020/DobrzeZiemio/2.jpg',
    },
    {
        original: 'public/gallery/2020/DobrzeZiemio/3.jpg',
    },
]

class SchoolLive extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <h1>Życie szkoły!!</h1>
                <div>
                    <Gallery
                        images={images}
                    ></Gallery>
                </div>
            </div>

        )
    }
}

export default SchoolLive