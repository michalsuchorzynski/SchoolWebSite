import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class Volunteering extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
            <div className="container">
                <h1>Wolontariat</h1>
                <section>
                        <h4>Byliśmy Mikołajami!</h4>
                        <span>
                        Uczniowie ze Szkolnego Klubu Wolontariusza przez cały listopad i grudzień prowadzili zbiórkę potrzebnych rzeczy dla Hospicjum Nadzieja i Domu Dziecka.
                        Dzięki pomocy swoich kolegów udało się im zebrać zarówno potrzebne rzeczy higieniczne (chusteczki, ręczniki papierowe, oliwki,
                        szampony, mydła, kremy, gąbki do mycia), jak i zabawki (pluszaki, książki, kredki, pisaki, bloki, kolorowe książeczki, lalki, puzzle i gry).
                        Uczniowie podarowali także chorym dzieciom soczki, kaszki, musy oraz zupki i desery w słoiczkach.
                        Tuż przed Bożym Narodzeniem Wolontariusze przez trzy dni pakowali zebrane rzeczy. Prezenty trafiły już do potrzebujących dzieci.Dziękujemy za wsparcie akcji!
                    </span>
                    </section>
                    <section>
                        <h4>Robienie stroików</h4>
                        <span>
                            Tuż przed Świętem Zmarłych Wolontariusze poświęcili swój wolny czas na robienie stroików.
                            Uczniowie wykonali je przy pomocy Pani Anny Mikuckiej. Następnie wraz z opiekunem Szkolnego Klubu Wolontariusza
                            troje z nich, tj. Tina Błotnicka, Alicja Górna i Damian Kowalski udali się na cmentarz, aby postawić wykonane stroiki na
                            grobach zmarłych księży oraz przy pomniku w Mazowszu.
                            Uczennice z klasy VII udały się natomiast pod pamiątkowy kamień w Świętosławiu, aby i tam złożyć stroik.
                    </span>
                    </section>
                    <section>
                        <h4>Przytulisko</h4>
                        <span>
                            Szkolny Klub Wolontariusza przez cały październik prowadził zbiórkę na rzecz Przytuliska dla psów w Golubiu-Dobrzyniu.
                            Uczniowie przynosili karmy (suche i mokre), makarony, kasze, koce i inne potrzebne rzeczy.
                            Łącznie udało się zebrać ponad 30 kg pożywienia dla potrzebujących psów oraz 5 worków rzeczy, które ogrzeją zwierzęta zimą.
                            Wszystkich Przyjaciołom zwierząt dziękujemy!
                    </span>
                    </section>
            </div>
            </MainPanel>
        )
    }
}

export default Volunteering