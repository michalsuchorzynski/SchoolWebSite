import React from 'react'
import Accordion from '../../components/UI/Accordion/Accordion'
import { IAccordion } from '../../components/UI/Accordion/models/IAccordion'
import MainPanel from '../../hoc/MainPanel'


const forStudentsItems: IAccordion[] = [
    {
        id: 'LessonPlan',
        header: 'Plan lekcji',
        content: (
            <div>
                <h3>Plan lekcji dla klasy:</h3>
                <ul>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasai.pdf">I</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasaii.pdf">II</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasaiii.pdf">III</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasaiv.pdf">IV</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasav.pdf">V</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasavi.pdf">VI</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasavii.pdf">VII</a></li>
                    <li><a tabIndex={4} href="./pdf/planLekcji/klasaviii.pdf">VIII</a></li>
                </ul>
            </div>
        ),
    },
    {
        id: 'Transport',
        header: 'Dowozy',
        content: (
            <div>
                <h3>Trasa Autobusu z wyszczególnieniem przystanków:</h3>
                <ul>
                    <li>7<sup>03</sup> Kujawy</li>
                    <li>7<sup>08</sup> Nowa Wieś (budynek byłego gimnazjum)</li>
                    <li>7<sup>15</sup> Rudaw (centrum)</li>
                    <li>7<sup>18</sup> Rudaw  koło p. Gutmańskiego</li>
                    <li>7<sup>22</sup> Nowa WIeś przystanek</li>
                    <li>7<sup>26</sup> Miliszewy koło sklepu</li>
                    <li>7<sup>28</sup> Miliszewy koło figurki</li>
                    <li>7<sup>32</sup> Miliszewy koło p. Rumińskich</li>
                    <li>7<sup>36</sup> Morgowo przystanek PKS</li>
                    <li>7<sup>39</sup> Miliszewy koło p Ciechanowskiego</li>
                    <li>7<sup>42</sup> Szkoła w Świętosławiu</li>
                    <li>7<sup>47</sup> Świętosłąw Las</li>
                    <li>7<sup>55</sup> Szkoła w Świętosławiu</li>
                </ul>

                <h3>Odwóz po zajęciach:</h3>
                <ul>
                    <li>pierwszy odwóz o 13<sup>40</sup></li>
                    <li>drugi odwóz o 15<sup>25</sup></li>
                </ul>
            </div>
        ),
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

class Students extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Dla uczniów</h1>
                    <section>
                        <Accordion items={forStudentsItems} />
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default Students