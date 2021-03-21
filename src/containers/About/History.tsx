import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class History extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Historia szkoły</h1>
                    <section>
                        <h4>Powstanie szkoły</h4>
                        <span>
                            Szkoła Podstawowa w Świętosławiu powstała w okresie międzywojennym.
                            Jej założycielami byli Państwo Jadwiga i Adolf Tomowie.
                            W tym czasie szkoła mieściła się w kilku domach prywatnych.
                            Działalność szkoły przerwała II wojna światowa.
                            Po zakończeniu okupacji A. Tom otworzył szkołę w "pałacu".
                            Ogromny wkład w jej rozwój włożyli pierwsi kierownicy M. Szelążek, W. Baczyńska, W. Wiśniewski, H. Matuszewski.
                            W roku 1969 uczniowie podjęli naukę w nowym budynku, który wyglądał okazale: izby lekcyjne, sala gimnastyczna, kuchnia, biblioteka.
                            W tym czasie działały : chór, zespół muzyczny, drużyny harcerskie, kolo sportowe.
                            Obecnie do naszej szkoły uczęszczają w większości wnukowie pierwszych powojennych absolwentów.
                    </span>
                    </section>
                    <section>
                        <h4>Patron szkoły</h4>
                        <span>
                            1 września 1939 r., napaścią Niemiec na Polskę, rozpoczęła się II wojna światowa.
                            Także mieszkańcy naszych miejscowości nie poddali się biernie najeźdźcom, dzielnie walczyli o wolność i niepodległość naszej ojczyzny.
                            Byli uczestnikami bitew wojny obronnej: nad Bzurą i pod Kockiem.
                            Po zakończeniu kampanii wrześniowej, wielu z nich trafiło do niemieckiej i radzieckiej niewoli, niektórzy polegli w walce, inni zostali zamordowani przez okupantów.
                            Szanujemy ich oddanie. Pamiętamy o ich bohaterstwie.
                    </span>
                        <br></br>
                        <span>
                            Ci którzy walczyli za naszą Ojczyznę (według źródeł miejscowych):
                        </span>
                        <ul
                            style={{
                                columnCount: 3
                            }}
                        >
                            <li>Rumiński Jan</li>
                            <li>Cichowicz Jan</li>
                            <li>Ossowski Alojzy</li>
                            <li>Dąbrowski Stefan - Charków</li>
                            <li>Wernerowicz Stanisław</li>
                            <li>Rygielski Władysław</li>
                            <li>Wernerowicz Wacław</li>
                            <li>Orłowski Władysław</li>
                            <li>Zduński Ignacy </li>
                            <li>Majcher Władysław</li>
                            <li>Kalinowski Ignacy</li>
                            <li>Głowacki Władysław</li>
                            <li>Piotrowski Władysław</li>
                            <li>Pietrzykowski Stanisław</li>
                            <li>Pietrzykowski Antoni</li>
                            <li>Pietrzykowski Leon</li>
                            <li>Suchorzyński Kazimierz</li>
                            <li>Suchorzyński Aleksander</li>
                            <li>Kaźmierkiewicz Teofil</li>
                            <li>Matuszewski Leon</li>
                            <li>Karbowski Lucjan</li>
                            <li>Janicki Ignacy </li>
                            <li>Sztagierski Jan</li>
                            <li>Małecki Ignacy </li>
                            <li>Banaszewski Kazimierz</li>
                            <li>Maślankowski Wacław</li>
                            <li>Okruciński Wacław</li>
                            <li>Bruzdowski Dominik</li>
                        </ul>
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default History