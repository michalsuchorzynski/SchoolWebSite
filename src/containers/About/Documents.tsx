import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class Documents extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Dokumenty</h1>
                    <section>
                        <h4>Zestaw dokumentów szkolnych:</h4>
                        <ul
                            style={{
                                columnCount: 1
                            }}
                        >
                            <li>
                                <a
                                    href={"./pdf/statut.pdf"}
                                >
                                    Statut szkoły
                            </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/ewaluacja.pdf"}
                                >
                                    Raport z ewaluacji
                            </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/300.pdf"}
                                >
                                    Dobry start 300 dla ucznia
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/klauzula.pdf"}
                                >
                                    Klauzula informacyjna o przetwarzaniu danych osobowych
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/raportDostepnosci.pdf"}
                                >
                                    Raport o dostępności
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/deklaracjaDostepnosci.pdf"}
                                >
                                    Deklaracja dostępności
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default Documents