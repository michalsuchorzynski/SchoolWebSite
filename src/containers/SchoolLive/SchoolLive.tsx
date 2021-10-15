import React from 'react'
import MainPanel from '../../hoc/MainPanel'

class SchoolLive extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <MainPanel>
                <div className="container">
                    <h1>Życie szkoły!!</h1>
                    <section>
                    <h3>Szczepienie przeciwko COVID-19</h3>
                        <img
                            style={
                                {
                                    display: "flex",
                                    width: "40vw"
                                }
                            }
                            src="./images/Szczepionkobus.jpg"
                            
                        />
                    </section>
                    <section>
                        <h3>Sprzątanie Świata 2021 pod hasłem, Myślę, więc nie śmiecę”.</h3>
                        <div>W poniedziałek, 20 września br., wzorem ubiegłych lat, nasza
                            szkoła włączyła się do akcji „Sprzątania Świata”. Celem
                            przedsięwzięcia było promowanie nieśmiecenia, edukacja
                            odpadowa oraz inicjowanie działań, dzięki którym zmniejszy
                            się negatywny wpływ oddziaływania na środowisko.
                            <br></br>
                            Uczniowie klas IV-VII wraz z opiekunami, tym razem
                            zagościli w Leśnie i tam podjęli działania, które przyczyniły
                            się zmniejszeniu ilości odpadów. Po ciężkiej pracy, jaką było
                            sprzątanie okolicznych lasów, czekało na nich ognisko z
                            kiełbaskami oraz mnóstwo zabaw na świeżym powietrzu.
                            <br></br>
                            Serdecznie dziękujemy wszystkim za zaangażowanie się w akcję!
                            <br></br>
                            <a href="http://swietoslawszkola.web-album.org/album/55187,sprzatanie-lasu">Zapraszamy do galerii ......</a>
                        </div>
                    </section>
                    <section>
                        <h3>Szczepienie przeciwko COVID-19</h3>
                        <img
                            style={
                                {
                                    display: "flex"
                                }
                            }
                            src="./images/szczepienie.png"
                        />
                        <a
                            tabIndex={4}
                            href={"./pdf/szczepienie.pdf"}
                        >Więcej tutaj</a>
                    </section>
                    <section>
                        <h3>Mobilny Punkt Spisowy</h3>
                        <a
                            tabIndex={4}
                            href={"./pdf/MobilnyPunktSpisowy.pdf"}
                        >Więcej tutaj</a>
                    </section>
                    <section>
                        <h3>Narodowy Spis Powszechny Ludności i Mieszkań w 2021 r</h3>
                        <a
                            tabIndex={4}
                            href={"./pdf/NSP2021.pdf"}
                        >
                            Informacja
                        </a>
                    </section>
                    <section>
                        <h3>Udział w projekcie “Little water ambassadors” w ramach programu eTwinning.</h3>
                        <div>
                            W kwietniu i maju 2021 roku uczniowie klas: 1, 2 i 3 wzięli udział w projekcie ”Mali ambasadorowie wody”,
                            którego głównymi celami było: promowanie ochrony przyrody, dbanie o środowisko oraz budowanie wśród dzieci świadomości proekologicznej.
                            Cele te były realizowane głównie poprzez ukazanie znaczenia wody w naszym życiu oraz działania związane z obchodami Dnia Ziemi.
                            <br></br>
                            Duże znaczenie ma też fakt, że w ramach projektu współpracowaliśmy ze szkołami z Turcji oraz szkołą z Włoch,
                            komunikując się w języku angielskim i mając możliwość nawiązania żywych kontaktów z uczniami z innych krajów.
                            Część uczniów wzięła udział w spotkaniu video z uczniami ze szkoły w Konya w Turcji oraz
                            w rozmowie online z uczniami i nauczycielami biorącymi udział w projekcie.
                            <br></br>
                            Efekty naszej pracy to także plakaty, hasła oraz opowiadanie w języku polskim i angielskim.
                            Za projekt otrzymaliśmy Krajową Odznakę Jakości eTwinning - Quality Label.
                            <br></br>
                            Mam nadzieję, że ten projekt to tylko dobry początek naszej międzynarodowej przygody.
                            <br></br>
                            <a href="http://swietoslawszkola.web-album.org/album/54902,etwinning">Zapraszamy do galerii ......</a>
                        </div>
                    </section>
                    <section>
                        <h3>Dzień matki i ojca</h3>
                        <a href="https://youtu.be/pY98UEnI3ec">Życzenia</a>
                    </section>
                    <section>
                        <h3>Challenge dla Lenki</h3>
                        <div>
                            Nominujemy:
                            <ul>
                                <li>Szkołę Podstawową w Osówce</li>
                                <li>Szkołę Podstawową w Nowogrodzie</li>
                                <li>Szkołę Podstawową w Mazowszu</li>
                                <li>OSP w Świętosławiu</li>
                                <li>KGW w Świętosławiu</li>
                            </ul>
                            <br />
                            <a href="https://youtu.be/SCMFvS68GLI">Link do nagrania</a>
                        </div>
                    </section>
                    <section>
                        <h3>XXI WOJEWÓDZKI KONKURS RECYTATORSKI POEZJI I PROZY POŚWIĘCONEJ FRYDERYKOWI CHOPINOWI I MUZYCE</h3>
                        <div>
                            W Ośrodku Chopinowskim w Szafarni odbyła się kolejna edycja konkursu recytatorskiego, tym razem w formie online.
                            Naszą szkołę reprezentowała uczennica klasy V, Justyna Romanowska, która przygotowała interpretację utworu Wandy Chotomskiej "Muzyka pana Chopina".
                            <br />
                            <a href="https://youtu.be/vxnCQaoT7Jw">Link do nagrania</a>
                        </div>
                    </section>
                    <section>
                        <h3>XVI WOJEWÓDZKI KONKURS RECYTATORSKI POEZJI KRZYSZTOFA KAMILA BACZYŃSKIEGO "ZNÓW WĘDRUJEMY CIEPŁYM KRAJEM"</h3>
                        W ostatnią sobotę kwietnia w Szkole Podstawowej w Czernikowie ogłoszono wyniki konkursu recytatorskiego poświęconego twórczości
                        Krzysztofa Kamila Baczyńskiego. Uczeń klasy VII, Kacper Łańcucki, zaprezentował dwa utwory poety. Zyskał uznanie jury - otrzymał jedną z nagród.
                        Gratulujemy!
                        <br></br>
                        <a href="https://youtu.be/JtUyvyoc9Q4">nagranie - Ten czas</a>
                        <br></br>
                        <a href="https://youtu.be/qNXzB6lbrH4">nagranie - Rodzicom</a>

                    </section>
                    <section>
                        <h3>Dzień Ziemi pod hasłem „Przywróć naszą Ziemię”</h3>
                        <div>
                            <br></br>
                            Dzień Ziemi to święto obchodzone na całym świecie 22 kwietnia. Tegorocznym motywem przewodnim było hasło ”Przywróć naszą Ziemię”.
                            Z powodu pandemii, wiele naszych podjętych działań, odbyło się w świecie wirtualnym. Jakie działania podjęliśmy?:
                            <ul>
                                <li>
                                    uczniowie klas VI i VII przygotowali dla całej naszej społeczności
                                    słuchowiska poświęcone zrównoważonemu rozwojowi i globalnemu ociepleniu  <a href={"./pdf/biologia5.mp4"}>Słuchowisko</a>
                                </li>
                                <li>
                                    klasy VI-VIII brały udział w webinarium „ Lekcje z klimatem” prowadzonym przez Młodzieżową Radę Klimatyczną
                                    przy współpracy Ministra Klimatu i Środowiska oraz uczestniczyli w warsztatach kulinarnych, zwracających
                                    uwagę na problem marnowania żywności, i „ubraniowych”, podkreślających kwestie odpowiedzialnej zrównoważonej mody.
                                </li>
                                <li>
                                    dla uczniów klas IV-VIII zorganizowano międzyklasowy konkurs pt. „Zaprzyjaźnij się z zero waste”,
                                    dotyczący niemarnowania jedzenia oraz ponownego przetwarzania odpadów.
                                </li>
                            </ul>
                            Zwycięzcami konkursu zostali:
                            <br></br>
                            Oliwier Główka-klasa IV, Julia Sztramkowska-klasa V, Zosia Wierzbowska-klasa
                            VI, Piotr Kotkiewicz-klasa VII, Adrian Szafrański-klasa VII, Damian Dąbrowski-klasa VII, Maja Wierzbowska-klasa VIII.
                            <br></br>
                            wszyscy zaś uczniowie mogli podjąć i wykonać ekowyzwania, takie jak, np: zbiórka śmieci w swojej okolicy, wykonać pojemnik na zbiórkę baterii bądź
                            nakrętek plastikowych w swoim domu, posadzenie drzewa, uszycie z niepotrzebnych materiałów ekotorby na zakupy, stworzenie kącika
                            recyklingowego czy wykonanie ekologicznych kosmetyków.  <a href={"./pdf/biologiaAA.mp4"}>Słuchowisko</a>
                            <br></br>
                            <a href="http://swietoslawszkola.web-album.org/album/54685,dzien-ziemi">Zapraszamy do galerii</a>
                            <br />
                            <b>
                                Pamiętajmy, że Dzień Ziemi musimy celebrować każdego dnia, ponieważ nie mamy już czasu, aby obchodzić go tylko raz do roku.
                                Dlatego zróbmy wszystko, aby chronić naszą planetę.
                            </b>
                        </div>
                    </section>
                    <section>
                        <h3>Zapisz się na konsultacje strategii dla młodzieży w woj. kujawsko-pomorskim!</h3>
                        <a href={"./pdf/Zapiszsie.pdf"}>Więcej informacji tutaj...</a>
                    </section>
                    <section>
                        <h3>Lekcje z klimatem</h3>
                        <div>
                            Uczniowie klas VI-VIII, 22 kwietnia br., uczestniczyli w webinarium dotyczącym dobrych praktyk na rzecz ochrony klimatu.
                            Webinarium poprowadzili przedstawiciele Młodzieżowej Rady Klimatycznej przy współpracy Ministerstwa Klimatu i Środowiska.
                            Oprócz wykładów na temat systemy klimatycznego Ziem,  cyklu węglowego, efektu cieplarnianego odbyły się bardzo ciekawe warsztaty:
                        </div>
                        <ul>
                            <li>kulinarne, z Jagną Niedzielską zwracające uwagę na problem marnowania żywności,</li>
                            <li>„ubraniowe”, z Katarzyną Wolszczak podkreślające kwestie odpowiedzialnej zrównoważonej mody.</li>
                        </ul>
                        <div>
                            Moda na ekologię trwa od dawna, w realiach pandemii zdecydowanie zyskała na popularności a my zamierzamy wpłynąć na
                            los naszej planety i aktywnie uczestniczyć w ekologicznych działaniach. <a href="https://lekcjezklimatem.pl/">Więcej informacji tutaj...</a>
                        </div>

                    </section>
                    <section>
                        <h3>Wyniki konkursu „Zdrowe Śniadanie Nastolatka”</h3>
                        <a href={"./pdf/WynikiKonkursu.pdf"}>Wyniki konkursu</a>
                    </section>
                    <section>
                        <h3>Audycja na Dzień Ziemi przygotowana przez dzielnych siódmoklasistów naszej szkoły.</h3>
                        <span>
                            Uczniowie klasy VII, z okazji Dnia Ziemi, przygotowali dla społeczności szkolnej słuchowisko poświęcone zrównoważonemu rozwojowi i globalnemu ociepleniu.
                            Serdecznie zapraszamy do jego wysłuchania.
                        </span>
                        <a href={"./pdf/biologia5.mp4"}>Słuchowisko</a>
                    </section>
                    <section>
                        <h3>Konkurs fotograficzno-plastyczny "Poznaj płazy Polski</h3>
                        <div>
                            Szkoła Leśna na Barbarce oraz Stowarzyszenie „Tilia” zapraszają uczniów do udziału w konkursie plastyczno-fotograficznym pn.
                            „Poznaj płazy Polski”. Konkurs skierowany jest do uczniów przedszkoli i szkół z terenu województwa kujawsko-pomorskiego w kategoriach wiekowych:
                            przedszkola, uczniowie klas I-III szkoły podstawowej, uczniowie klas IV-VIII szkoły podstawowej. W przypadku uczniów przedszkoli i klas I-III zadanie
                            konkursowe polega na przygotowaniu pracy plastycznej a starsi uczniowie mają do przygotowania zdjęcie płaza w środowisku naturalnym. Na laureatów czekają
                            atrakcyjne nagrody.
                            <br></br>
                            Więcej informacji na stronie internetowej konkursu <a href="https://ochronagatunkow.edu.pl/konkurs-fotograficzczny">tutaj :)</a>
                            <br></br>
                            Dokumenty:
                            <ul>
                                <li><a href={"./pdf/informacjaRODO.pdf"}>Informacja RODO</a></li>
                                <li><a href={"./pdf/RegulaminKonkursPOZNAJPŁAZYPOLSKI.pdf"}>Regulamin</a></li>
                                <li><a href={"./pdf/kartazgłoszenia-fotorgafia.pdf"}>Karta zgłoszenia - fotografia</a></li>
                                <li><a href={"./pdf/kartazgłoszenia-praca plastyczna.pdf"}>Karta zgłoszenia - praca plastyczna</a></li>
                            </ul>

                        </div>
                    </section>
                    <section>
                        <h3>Konkurs wielkanocny</h3>
                        <div>
                            Jak co roku w naszej szkole odbył się konkurs wielkanocny. Tym razem organizatorzy
                            zdecydowali się podzielić uczniów wg kategorii wiekowych. Przydzielili im też różne
                            zadania.
                            <br></br>
                            Klasy 0-3, aby zwyciężyć w konkursie, musiały przygotować wielkanocne
                            kurczaczki. Dzieci podeszły do tego zadania bardzo ochoczo i ambitnie, co zaowocowało
                            pięknymi pracami. Jury miało twardy orzech do zgryzienia, gdyż kurczaki były przepiękne i
                            starannie wykonane. Ostatecznie zwycięzcami okazali się: Lena Wróblewska i Antek
                            Charchuła. Wszystkim nagrodzonym i wyróżnionym dzieciom serdecznie gratulujemy!
                            <br></br>
                            Starsze klasy podjęły się zadania przygotowania kartek wielkanocnych, w które
                            wpisały życzenia w języku niemieckim (klasy 7-8) lub angielskim (klasy 4-6).
                            Najpiękniejsze prace przygotowali: Angelika Kowalkowska z klasy 8 i Konrad
                            Popielarski z klasy 4.
                            <br></br>
                            <b>Gratulujemy!</b>
                            <a href="http://swietoslawszkola.web-album.org/album/54606,konkurs-wielkanocny">Zapraszamy do galerii</a>
                        </div>
                    </section>
                    <section>
                        <h3>Konkurs "Dobrze Ziemio 2021"</h3>
                        <div>
                            Niezmiernie miło nam poinformować, że udział naszych uczniów z klas 6 i 7 w
                            Regionalnym Konkursie Poezji i Prozy „Dobrze Ziemio” zakończył się wielkim
                            sukcesem. Recytatorzy: Eliza Błaszkiewicz, Wiktor Bolewski (oboje z klasy
                            6) i Piotr Kotkiewicz (z klasy 7) zyskali uznanie jury i zdobyli wiele nagród.
                            Konkurs jest o tyle trudny, gdyż co roku gromadzi młodzież z całego
                            powiatu toruńskiego i z sąsiednich. Aby zdobyć nagrodę, należy nie tylko
                            nauczyć się tekstu na pamięć, ale także zinterpretować go poprawnie, mieć
                            dobrą dykcję i urzec komisję sztuką mówienia.
                            <br></br>
                            Nasi uczniowie zaprezentowali się doskonale: Piotrek uplasował się na 2.
                            miejscu, zdobył nagrodę i Nagrodę Stowarzyszeń Gmin Ziemi Dobrzyńskiej,
                            Eliza zajęła 3. miejsce, przyznano jej nagrodę i Nagrodę Dyrektora, Wiktor
                            otrzymał Nagrodę Wyróżnienie - jest to kolejny jego sukces w tym konkursie
                            recytatorskim. Poniżej zamieszczamy link do recytacji.
                            <br></br>
                            Naszym recytatorom serdecznie gratulujemy!
                        </div>
                        <div><a href="https://www.youtube.com/watch?v=zmP8W9JxrRQ">Zapraszamy do obejrzenia</a></div>
                    </section>
                    <section>
                        <h3>Konkurs mitologiczny</h3>
                        <div>
                            Jeszcze przed Świętami Bożego Narodzenia uczniowie z klas 6 i 7 przystąpili do
                            olimpijskiej potyczki z zakresu wiedzy o mitologii. Był to ogólnopolski konkurs, który
                            gruntownie sprawdzał wiedzę uczestników na temat wierzeń starożytnych Greków.
                            <br></br>
                            Miło nam poinformować, że Marcin Rumiński z klasy 6 uzyskał tytuł Laureata
                            Olimpiady Mitologicznej z języka polskiego. Uplasował się na zaszczytnym 14. miejscu w
                            skali krajowej.
                            <br></br>
                            Serdecznie gratulujemy wielkiego sukcesu!
                        </div>
                    </section>
                    <section>
                        <h3>Jak uczniowie naszej szkoły radzą sobie ze stresem w okresie pandemii?</h3>
                        <a href="http://swietoslawsp.web-album.org/album/54481,jak-uczniowie-naszej-szkoly-radza-sobie-ze-stresem-w-okresie-pandemii">Zapraszamy do galerii</a>
                    </section>
                    <section>
                        <h3>"Gotuj się na zmiany" - ogólnopolski program edukacyjny zmieniający nawyki żywieniowe nastolatków</h3>
                        <span>
                            Uczniowie klas V-VII przystąpili do ogólnopolskiego programy "Gotuj się na zmiany",
                            którego nadrzędnym celem jest kształtowanie dobrych nawyków żywieniowych, odpowiedzialnego stylu życia w duchu zero waste od najmłodszych lat.
                            Program kształtuje zdrowe nawyki żywieniowe oraz pobudza apetyt... na wiedzę. W związku z tym ogłaszamy konkurs na Zdrowe śniadanie nastolatka
                        </span>
                        <br></br>
                        <span>Warunki uczestnictwa:</span>
                        <ol>
                            <li>Konkurs adresowany jest do uczniów klas 4- 8</li>
                            <li>Zadaniem uczestników konkursu jest wykonanie zdjęcia swojego zdrowego i kolorowego śniadania. Można dołączyć przepis.</li>
                            <li>Śniadanie  przygotowujemy własnoręcznie</li>
                            <li>Zdjęcie  przesyłamy do p.Renaty Romanowskiej-Stempnik (przez dziennik elektroniczny lub mailem: renata.romanowska1@op.pl)</li>
                            <li>Każdy uczestnik może przesłać tylko jedno zdjęcie</li>
                            <li>Ogłoszenie wyników-30 marca br.</li>
                            <li>W konkursie przewidziane są  nagrody.</li>
                        </ol>
                        <a href="http://swietoslawszkola.web-album.org/album/54607,zdrowe-sniadanie">Zapraszamy do galerii</a>
                    </section>
                    <section>
                        <h3>Tydzień mózgu</h3>
                        <div>
                            Centrum Nowoczesności Młyn Wiedzy w Toruniu zaprasza na mega dawkę informacji o mózgu w postaci warsztatów, pokazów,
                            prezentacji i wykładów w wersji online od 15 do 19 marca.
                            Na stronie <a href="https://mlynwiedzy.org.pl/mlyn-wiedzy-tydzien-mozgu-2021/">o tu :)</a> oraz na kanale Centrum Nowoczesności Młyn Wiedzy w serwisie
                            You Tube będą dostępne filmy edukacyjne związane z naszymi zmysłami i nie tylko.
                            Zapraszamy wszystkich zainteresowanych uczniów do zapoznania się z filmikami.
                            A tych, którzy chcą przekonać się, jak bardzo ich mózg jest kreatywny, zapraszam na kreatywną lekcję :D
                            <br></br>
                            <a

                                href="https://wakelet.com/wake/Ii4ZHyyY4isdIza0T70w_?fbclid=IwAR3o4LuGqEDysSRAAkVnkYneRH3UlyN18iWeoX38XiAnep7EPvH_I2km-KI"
                            >
                                o tu :)
                            </a>
                            <br></br>
                            Mój mózg jest..., czyli jak uczniowie klas IV-VII postrzegają swój mózg <a href="http://swietoslawsp.web-album.org/album/54482,moj-mozg-jest-czyli-jak-uczniowie-klas-iv-vii-postrzegaja-swoj-mozg" >zapraszamy do galerii ......</a>
                            <br></br>
                            Niesamowite mózgi nauczycieli <a href="http://swietoslawsp.web-album.org/album/54483,niesamowite-mozgi-nauczycieli">zapraszamy do galerii ......</a>
                        </div>
                    </section>
                    <section>
                        <h3>"ZaPROJEKTowani na sukces"- najbardziej inspirujący e-book roku z naszym udziałem</h3>
                        <div>
                            "Projektanci edukacji" to więcej niż konkurs - to nauczyciele i uczniowie pełni pomysłów i inwencji,
                            pragnący aktywnie się rozwijać i w sposób ciekawy, twórczy, nieszablonowy przyswajać nową wiedzę.
                            "ZaPROJEKTowani na sukces" to publikacja w której znalazły się opisy i omówienia 28 najciekawszych,
                            najbardziej oryginalnych i najlepiej zrealizowanych projektów-laureatów dziesiątej edycji konkursu.
                            Przeczytacie wypowiedzi twórców tych projektów, komentarze jurorów, opisy unikatowych elementów poszczególnych projektów
                            i wnioski wypływające z ich realizacji. Jesteśmy bardzo dumni z tego,
                            iż nasz projekt z biologii "Mózgomania-szalony Tydzień Mózgu w naszej szkole" znalazł się wśród 28
                            najciekawszych projektów edukacyjnych i tym samym przyczynił się do promocji naszej szkoły.
                            Wszystkich zainteresowanych zapraszamy do zapoznania się z naszym projektem i odwiedzenia strony internetowej:
                        </div>
                        <ul>
                            <li><a href="https://projektanciedukacji.pl/konkurs/aktualnosci/-zaprojektowani-na-sukces-najbardziej-inspirujacy-ebook-roku">strona projektu</a></li>
                            <li><a href="https://projektanciedukacji.pl/projekt-archiwum?id=9949">strona projektu</a></li>
                            <li><a href="https://drive.google.com/file/d/1drUOY3SG9_H8NOnFR0rZZ5ciWbMlSTL7/view">strona projektu</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Dzień Języków Obcych</h3>
                        <div>
                            <a href="http://swietoslawsp.web-album.org/album/54296,dzien-jezykow-obcych">Zapraszamy do galerii ......</a>
                        </div>
                    </section>
                </div>
            </MainPanel>
        )
    }
}

export default SchoolLive