import React from 'react'
import Accordion from '../../components/UI/Accordion/Accordion'
import { IAccordion } from '../../components/UI/Accordion/models/IAccordion'
import MainPanel from '../../hoc/MainPanel'


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
const recruitments: IAccordion[] = [
    {
        id: 'recruitments1',
        header: 'Przedszkole',
        content: (
            <div>
                <h3>Wyniki rekrutacji 2021/2022</h3>
                <div>LISTA DZIECI PRZYJETYCH DO ODDZIAŁU PRZEDSZKOLNEGO W MILISZEWACH:</div>
                <ol>
                    <li>Binensztok Gabriel Paweł</li>
                    <li>Bednarski Igor</li>
                    <li>Brzóskowski Damian</li>
                    <li>Buczkowski Tymoteusz</li>
                    <li>Głowacki Miłosz</li>
                    <li>Górecka Laura</li>
                    <li>Grzesiak Kacper Ksawier</li>
                    <li>Jaranowska Zofia</li>
                    <li>Konarska Iga</li>
                    <li>Kowalkowski Ksawery</li>
                    <li>Kowalska Nadia Amelia</li>
                    <li>Krzywdziński Kacper</li>
                    <li>Lipiński Bartosz</li>
                    <li>Łaska Marcin</li>
                    <li>Malinowska Oliwia</li>
                    <li>Nowiński Oliwier</li>
                    <li>Nowiński Filip</li>
                    <li>Okrucińska Blanka</li>
                    <li>Piotrowska Aurelia</li>
                    <li>Popielarski Nikodem</li>
                    <li>Redmerska Patrycja</li>
                    <li>Rumińska Maja</li>
                    <li>Ryczek Oliwia</li>
                    <li>Sztandarska Kornelia</li>
                    <li>Więckowski Wojciech</li>
                    <li>Wiśniewski Hubert Filip</li>
                    <li>Wojciechowska Lidia</li>
                    <li>Wróblewska Joanna</li>
                </ol>
                <div>LISTA DZIECI PRZYJETYCH DO ODDZIAŁU PRZEDSZKOLNEGO „zerówka”:</div>
                <ol>
                    <li>Binensztok Maksymilian Leon</li>
                    <li>Błotnicka Julia</li>
                    <li>Cieplak Izabela</li>
                    <li>Drążek Wiktor</li>
                    <li>Jaranowski Franciszek</li>
                    <li>Kapłon Jakub</li>
                    <li>Piotrowska Rozalia</li>
                    <li>Popielarski Jakub</li>
                    <li>Romanowska Łucja</li>
                    <li>Romanowska Natalia</li>
                    <li>Więckowska Julia</li>
                </ol>
            </div >
        ),
    },
    {
        id: 'recruitments2',
        header: 'Szkoła',
        content: (
            <a
                tabIndex={4}
                href="https://www.ciechocin.pl/304,wszystkie-aktualnosci?tresc=5385"
            >
                Rekrutacja 2021/2022
            </a>
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
        id: 'recruitment',
        header: 'Rekrutacja',
        content: undefined,
        subItems: recruitments
    },
    {
        id: 'News',
        header: 'Aktualności',
        content: (
            <div>
                <span>Brak nowych wiadomości</span>
            </div>
        )
    },

]

class Parents extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Dla rodziców</h1>
                    <section>
                        <Accordion items={forParentsItems} />
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default Parents