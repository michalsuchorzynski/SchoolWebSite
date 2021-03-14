import React from 'react'


interface ILogoProps {
    image: any;
}

const Logo = (props: ILogoProps) => (
    <div className="logo" >
        <img src={props.image} alt="SP Świętosław" />
    </div>
)

export default Logo