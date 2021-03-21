import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class Council extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
            <div className="container">
                <h1>Nauczyciele</h1>
                <section>
                    <h4>Nasi nauczyciele:</h4>
                    <ul
                        style={{
                            columnCount: 1
                        }}
                    >
                        <li>mgr Marzanna Suchorzyńska - dyrektor, nauczanie zintegrowane</li>
                        <li>mgr Dorota Bolewska -nauczanie zintegrowane, logopeda</li>
                        <li>mgr Izabela Dobrowolska - fizyka</li>
                        <li>mgr Anna Grazi - zajęcia komputerowe, historia, WOS, geografia</li>
                        <li>mgr Joanna Kaśkiewicz - religia</li>
                        <li>mgr Aneta Kruszyńska - pedagog, nauczanie zintegrowane</li>
                        <li>lic. Iwetta Lach - wychowanie przedszkolne</li>
                        <li>lic. Robert Malanowski - wychowanie fizyczne</li>
                        <li>mgr Joanna Malinowska - EDB, socjoterapia</li>
                        <li>mgr Katarzyna Matczak - język niemiecki</li>
                        <li>mgr Joanna Piskorska - język polski, świetlica, plastyka</li>
                        <li>mgr Sylwia Puszakowska - chemia</li>
                        <li>mgr Renata Romanowska-Stępnik - przyroda, biologia, geografia</li>
                        <li>mgr Tomasz Szczepkowski- język angielski</li>
                        <li>mgr Katarzyna Szczot - nauczanie zintegrowane</li>
                        <li>mgr Wisława Szłapka- matematyka</li>
                        <li>mgr Wioletta Wolfram - język polski</li>
                        <li>mgr Anita Zbonikowska - historia,technika, muzyka, biblioteka</li>
                    </ul>
                </section>
            </div>
            </MainPanel>
        )
    }
}

export default Council