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
                                    target={"_blank"}
                                >
                                    Statut szkoły
                            </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/ewaluacja.pdf"}
                                    target={"_blank"}
                                >
                                    Raport z ewaluacji
                            </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/300.pdf"}
                                    target={"_blank"}
                                >
                                    Dobry start 300 dla ucznia
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/klauzula.pdf"}
                                    target={"_blank"}
                                >
                                    Klauzula informacyjna o przetwarzaniu danych osobowych
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/raportDostepnosci.pdf"}
                                    target={"_blank"}
                                >
                                    Raport o dostępności
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"./pdf/deklaracjaDostepnosci.pdf"}
                                    target={"_blank"}
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