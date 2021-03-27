import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class Sport extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Orlik 2012</h1>
                    <section>
                        <h4>ZAWIESZENIE DZIAŁANIA ORLIKA I PROJEKTU LOKALNY ANIMATOR SPORTU</h4>
                        <span>
                            W związku z ROZPORZĄDZENIEM RADY MINISTRÓW z dnia 25 marca 2021 r. w sprawie ustanowienia określonych ograniczeń, 
                            nakazów i zakazów w związku z wystąpieniem stanu epidemii PROJEKT LOKALNY ANIMATOR SPORTU ZOSTAJE ZAWIESZONY BEZWARUNKOWO 
                            DO DNIA 9 KWIETNIA 2021 R. 
                        </span>
                        <br></br>
                        <a tabIndex={4} href="https://projektorlik.pl/2021/03/26/projekt-lokalny-animator-sportu-zawieszony-bezwarunkowo/">Szczegółowe informacje tutaj.</a>
                    </section>
                    <section>
                        <h4>Powstanie orlika</h4>
                        <span>
                            21 listopada 2008 r. na terenie naszej szkoły, odbyło się uroczyste otwarcie kompleksu boisk sportowych :"Orlik 2012".
                            W skład kompleksu wchodzi: boisko do piłki nożnej z trawy syntetycznej o wymiarach 30 m x 60 m; boisko wielofunkcyjne do piłki koszykowej i siatkowej o wymiarach 19,1 m x 32,1 m oraz zaplecze sanitarne.
                            Przez cały rok odbywa się tu szereg imprez sportowych z udziałem dużych i małych miłośników sportu z gminy Ciechocin.
                        </span>
                    </section>
                    <section>
                        <h4>Harmonogram Korzystania z boiska Orlik</h4>
                        <span>
                            Planowe zajęcia szkolne dla uczniów Szkoły Podstawowej:
                        </span>
                        <ul
                        >
                            <li><b>od poniedziałku do piątku w godz. 8:00 – 14:00</b></li>
                        </ul>
                        <span>
                            Boiska są dostępne dla wszystkich chętnych:
                        </span>
                        <ul
                        >
                            <li>
                                <b>od poniedziałku do piątku w godz. 14:00 – 20:00</b>
                            </li>
                            <li>
                                <b>sobota  w godz. 12:00 – 18:00</b> z wyłączeniem dni zorganizowanych zawodów sportowych i innych imprez szkolnych, gminnych.
                            </li>
                            <li>
                                <b>niedziela nieczynne</b> z wyłączeniem dni zorganizowanych zawodów sportowych i innych imprez szkolnych, gminnych.
                            </li>
                        </ul>

                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default Sport