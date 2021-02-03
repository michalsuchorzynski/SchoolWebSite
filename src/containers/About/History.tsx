import React from 'react'

class History extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="container">
                <h1>Historia szkoły!!</h1>
                <span>
                    Szkoła Podstawowa w Świętosławiu powstała w okresie między\wojennym.
                    Jej założycielami byli Państwo Jadwiga i Adolf Tomowie.
                    W tym czasie szkoła mieściła się w kilku domach prywatnych.
                    Działalność szkoły przerwała II wojna światowa.
                    Po zakończeniu okupacji A. Tom otworzył szkołę w "pałacu".
                    Ogromny wkład w jej rozwój włożyli pierwsi kierownicy M. Szelążek, W. Baczyńska, W. Wiśniewski, H. Matuszewski.
                    W roku 1969 uczniowie podjęli naukę w nowym budynku, który wyglądał okazale: izby lekcyjne, sala gimnastyczna, kuchnia, biblioteka.
                    W tym czasie działały : chór, zespół muzyczny, drużyny harcerskie, kolo sportowe.
                    Obecnie do naszej szkoły uczęszczają w większości wnukowie pierwszych powojennych absolwentów.
                </span>
            </div>

        )
    }
}

export default History