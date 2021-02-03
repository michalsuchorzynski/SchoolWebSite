import React from 'react'
import { ITile } from '../../components/UI/Tile/models/ITile'
import TileList from '../../components/UI/Tile/TileList'
import { faPhone, faAt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const contactItems: ITile[] = [
    {
        id: 'Map',
        icon: faMapMarkedAlt,
        header: 'ODWIEDŹ NAS',
        subHeader: 'Szkoła mieści się pod adresem:',
        text: 'Świętosław 36, 87-408 Ciechocin',
    },
    {
        id: 'Phone',
        icon: faPhone,
        header: 'ZADZWOŃ',
        subHeader: 'w godzinach pracy sekretriatu',
        text: 'Tel. 56 683 70 20',
    },
    {
        id: 'Mail',
        icon: faAt,
        header: 'NAPISZ',
        subHeader: 'lub kliknij w powyższą ikonę koperty i skorzystaj z formularza kontaktowego',
        text: 'swietoslaw32@wp.pl',
    },
]

class Contact extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
                <section>
                    <TileList items={contactItems} />
                </section>

            </div>
        )
    }
}

export default Contact