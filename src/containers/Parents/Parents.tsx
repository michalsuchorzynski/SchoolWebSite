import React from 'react'
import Accordion from '../../components/UI/Accordion/Accordion'
import { IAccordion } from '../../components/UI/Accordion/models/IAccordion'


const news: IAccordion[] = [
    {
        id: 'News1',
        header: 'Zebranie rodziców 1',
        content: (
            <span>Zebranie rodziców 1</span>
        ),
    },
    {
        id: 'News2',
        header: 'Zebranie rodziców 2',
        content: (
            <span>Zebranie rodziców 2</span>
        ),
    },
]

const forParentsItems: IAccordion[] = [
    {
        id: 'ParentsManagement',
        header: 'Rada rodziców',
        content: (
            <div>
                <h3>Zarząd:</h3>
                <ul>
                    <li>Anna Rumińska - Przewodnicząca</li>
                    <li>Agnieszka Wierzbowska - Zastepca</li>
                    <li>Katarzyna Popielarska - Skarbnik</li>

                </ul>
                <h3>Członkowie:</h3>
                <ul>
                    <li>Karolina Kapłon - klasa I</li>
                    <li>Katarzyna Lipińska - klasa II</li>
                    <li>Sebastian Wróblewski - klasa III</li>
                    <li>Katarzyna Popielarska - klasa IV</li>
                    <li>Iwona Rumińska - klasa V</li>
                    <li>Anna Rumińska - klasa VI</li>
                    <li>Romana Synarska - klasa VII</li>
                    <li>Agnieszka Wierzbowska - klasa VIII</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'Educators',
        header: 'Wychowawcy',
        content: (
            <div>
                <ul>
                    <li>Paulina Gumowska - "Motylki" Miliszewy</li>
                    <li>Iwetta Lach - "Zerówka"</li>
                    <li>Agnieszka Bednarska - klasa I</li>
                    <li>Dorota Bolewska - klasa II</li>
                    <li>Katarzyna Szczot - klasa III</li>
                    <li>Robert Malanowski - klasa IV</li>
                    <li>Wiolleta Wolfram - klasa V</li>
                    <li>Joanna Piskorska - klasa VI</li>
                    <li>Anna Grazi - klasa VII</li>
                    <li>Anita Zbonikowska - klasa VIII</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'Shifts',
        header: 'Dyżury nauczycieli',
        content: (
            <span>Dyżury</span>
        ),
    },
    {
        id: 'News',
        header: 'Aktualności',
        content: undefined,
        subItems: news
    },

]

class Parents extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <h1>Dla rodziców</h1>
                <section>
                    <Accordion items={forParentsItems} />
                </section>
            </div>
        )
    }
}

export default Parents