import React from 'react'
import Gallery from '../../components/UI/Gallery/Gallery'
import { galleryMock } from './mock/GalleryMock'

class SchoolLive extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <h1>Życie szkoły!!</h1>
                <div>
                    <Gallery
                        images={galleryMock as any}
                    ></Gallery>
                </div>
            </div>

        )
    }
}

export default SchoolLive