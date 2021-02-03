import React from 'react'

class About extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <section>
                    <h2>Orlik 2012</h2>
                    <span>
                        21 listopada 2008 r.. na terenie naszej szkoły, odbyło się uroczyste otwarcie kompleksu boisk sportowych :"Orlik 2012".
                        W skład kompleksu wchodzi: boisko do piłki nożnej z trawy syntetycznej o wymiarach 30 m x 60 m; boisko wielofunkcyjne do piłki koszykowej i siatkowej o wymiarach 19,1 m x 32,1 m oraz zaplecze sanitarne.
                        Przez cały rok odbywa się tu szereg imprez sportowych z udziałem dużych i małych miłośników sportu z gminy Ciechocin.
                    </span>
                </section>
                <section>
                    <h2>Internetowe Centrum Informacji Multimedialnej współfinansowane z Europejskiego Funduszu Społecznego</h2>
                    <span>
                        W naszej szkole od 2007 roku funkcjonuje Internetowe Centrum Informacji Multimedialnej
                        współfinansowane w ramach Europejskiego Funduszu Społecznego .
                        mgr Anita Zbonikowska jest opiekunem szkolnego centrum multimedialnego i informacyjnego.
                        W skład naszego centrum wchodzą 4 w pełni wyposażone komputery
                        (jednostka centralna, monitor, słuchawki, mikrofon) oraz urządzenie wielofunkcyjne ksero, drukarka, skaner.
                        Wszystkie komputery podłączone są do sieci :)
                    <br></br>
                        GODZINY OTWARCIA :
                        <br></br>
                        od poniedziałku do piątku według harmonogramu pracy biblioteki
                        W centrum można skorzystać z internetu oraz programów edukacyjnych:
                        <br></br>
                        - Portal - słowniki PWN - największy zbiór słowników:
                        języka polskiego, wyrazów obcych, ortograficzny, poprawnej polszczyzny
                        <br></br>
                        - Powszechna encyklopedia multimedialna PWN
                        <br></br>
                        - Multimedialny atlas świata PWN
                    </span>
                </section>
            </div>
        )
    }
}

export default About