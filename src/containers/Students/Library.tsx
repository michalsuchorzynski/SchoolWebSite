import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class Library extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Biblioteka</h1>
                    <section>
                        <h4>Godziny otwarcia biblioteki szkolnej</h4>
                        <span>
                            W roku szkolnym 2020/2021:
                        </span>
                        <ul
                        >
                            <li><b>Poniedziałek 9:45 – 11:45</b></li>
                            <li><b>Wtorek 9:45 – 10:45 i 11:30 - 12:30</b></li>
                            <li><b>Środa 8:00 – 10:40</b></li>
                            <li><b>Czwartek 8:30 – 11:30</b></li>
                            <li><b>Piątek 8:45 – 10:45</b></li>
                        </ul>
                    </section>
                    <section>
                        <h4>Regulaminy:</h4>
                        <ul
                            style={{
                                columnCount: 1
                            }}
                        >
                            <li>
                                <a
                                    href={"./pdf/regulaminBiblioteki.pdf"}
                                >
                                    Regulamin Biblioteki
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/regulaminCzytelni.pdf"}
                                >
                                    Regulamin Czytelni
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h4>Podstawowe informacje na temat wypozyczeń na czas pandemii koronawirusa:</h4>
                        <ol
                        >
                            <li>Należy zachować bezpieczną odległość od innych osób – minimum 1,5 metra.</li>
                            <li>Maksymalna ilość osób w bibliotece to 2 osoby i bibliotekarz.</li>
                            <li>Bibliotekarz przebywa w bibliotece w maseczce.</li>
                            <li>Zwracane książki należy położyć we wskazanym przez bibliotekarza miejscu.</li>
                            <li>Zwracane książki muszą przed ponownym wypożyczeniem przejść 2-dniową kwarantannę.</li>
                        </ol>
                    </section>
                    <section>
                        <h4>25 listopada - Święto Pluszowego Misia</h4>
                        <div>
                            Co roku w naszej szkole uczniowie z klas I -III oraz zerówki obchodzą Święto Pluszowego Misia.
                            W tym roku ze względu na nauczanie zdalne w I -III tylko dzieci z zerówki bawiły się w szkole.
                            Poznały one historię powstania pluszowego misia oglądając prezentację; opowiedziały o swoich misiach - za co je kochają i w czym im pomagają.
                            Poźniej wzięły udział w zabawach ruchowych i sprawnościowych ze swymi misiami. Odgadywały zagadki z życia niedźwiedzi na podstawie wysłuchanego tekstu.
                            Na końcu ułożyły misia z puzzli.
                        </div>
                        <div>
                            Z uczniami klas I-III niestety nie mogliśmy świętować w szkole, ale  aby mogły bawić się w domu dzieci otrzymały wiadomość,
                            w której znajdowały się odnośniki do misiowych piosenek, kolorowanek i gry, w której dzieci mogły przeżyć przygodę z Kubusiem Puchatkiem,
                            który obchodził urodziny. Nie zabrakło też spotkania z naszym rodzimym misiu o klapniętym uszku.
                            Propozycją biblioteki było obejrzenie bajki lub przeczytanie historii "Miś Uszatek".
                            Mogły też rozwiazać quiz o misiach z bajek. Z prezentacji dowiedziały się też jak powstało to święto.
                            Mam nadzieję, że w tym dniu w domach dzieci też było dużo zabawy i radości.
                        </div>
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default Library