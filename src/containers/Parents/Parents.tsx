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
                <span>Zasady rekrutacji dzieci do oddziału przedszkolnego obowiązujące od roku szkolnego 2014/2015:</span>
                <ol>
                    <li>Do oddziału przedszkolnego funkcjonującego w szkole przyjmowane są dzieci 5letnie i 6 letnie, które nie rozpoczęły obowiązku szkolnego.</li>
                    <li>Dzieci zamieszkałe w obwodzie szkoły przyjmuje się do oddziału przedszkolnego z urzędu na podstawie  zgłoszenia przez rodziców. </li>
                    <li>Dzieci zamieszkałe poza obwodem szkoły przyjmuje się do oddziału przedszkolnego  przy Szkole Podstawowej w Świętosławiu, po przeprowadzeniu postępowania rekrutacyjnego.</li>
                    <li>Postępowanie rekrutacyjne do oddziału przedszkolnego, przy Szkole Podstawowej w Świętosławiu, przeprowadza się co roku, na kolejny rok szkolny.</li>
                    <li>Postępowanie rekrutacyjne do oddziału przedszkolnego, przeprowadza komisja rekrutacyjna, powołana przez dyrektora szkoły. Dyrektor wyznacza przewodniczącego komisji rekrutacyjnej.</li>
                    <li>Terminy postępowania rekrutacyjnego, terminy składania dokumentów oraz terminy postępowania uzupełniającego określa dyrektor szkoły, w uzgodnieniu z Wójtem Gminy Ciechocin.</li>
                    <li>Wniosek o przyjęcie do oddziału przedszkolnego, przy Szkole Podstawowej w Świętosławiu, składa sie do dyrektora szkoły.</li>
                    <li>Do oddziału przedszkolnego, przy Szkole Podstawowej w Świętosławiu przyjmuje się dzieci zamieszkałe na obszarze Gminy Ciechocin.</li>

                    <li>W postępowaniu rekrutacyjnym do oddziału przedszkolnego,  w przypadku dziecka spoza Gminy Ciechocin, brane są pod uwagę, łącznie, następujące kryteria:
                    <ul>
                            <li>wielodzietność rodziny dziecka;</li>
                            <li>niepełnosprawność dziecka;</li>
                            <li>niepełnosprawność jednego z rodziców dziecka;</li>
                            <li>niepełnosprawność obojga rodziców dziecka;</li>
                            <li>niepełnosprawność rodzeństwa dziecka;</li>
                            <li>samotne wychowywanie dziecka w rodzinie;</li>
                            <li>objęcie dziecka pieczą zastępczą</li>
                        </ul>
                    </li>
                    <li>Kryteria oznaczone są wartością punktową a ich łączna suma stanowić będzie podstawę do wydania decyzji o przyjęciu dziecka do oddziału przedszkolnego przy Szkole Podstawowej w Świętosławiu.</li>
                    <li>Wzór wniosku rekrutacyjnego dyrektor szkoły ustala w porozumieniu z Wójtem Gminy Ciechocin.</li>
                    <li>Oświadczenie rodzica/prawnego opiekuna o występowaniu powyższych kryteriów powinno być uzupełnione o dokumenty potwierdzające okoliczności zawarte w oświadczeniach.</li>
                    <li>Termin pobierania i składania oświadczeń przez rodziców/prawnych opiekunów trwa od 15-31 marca.</li>
                    <li>Termin ogłoszenia list dzieci przyjętych do oddziału przedszkolnego przy Szkole Podstawowej w Świętosławiu upływa 5 kwietnia.</li>
                    <li>W ciągu 7 dni od ogłoszenia list przyjętych, rodzice/prawni opiekunowie mogą składać odwołania do dyrektora szkoły. </li>
                    <li>Odwołania rozpatrywać będzie, powołana przez dyrektora placówki Komisja Rekrutacyjna. Przewodniczący i członkowie Komisji Rekrutacyjnej powoływani będą każdorazowo zarządzeniem  dyrektora .</li>
                    <li>Termin ogłoszenia uzupełnionych list dzieci przyjętych do oddziału przedszkolnego przy Szkole Podstawowej w Świętosławiu-do 20 kwietnia.</li>
                    <li>O przypadkach niespełniania przez dziecko kryteriów, skutkujących odmową przyjęcia do oddziału przedszkolnego przy Szkole Podstawowej w Świętosławiu dyrektor szkoły informuje Wójta Gminy Ciechocin, który wskazuje rodzicom/prawnym opiekunom placówkę, w której dziecko spełniać będzie roczne, obowiązkowe przygotowanie przedszkolne.</li>
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