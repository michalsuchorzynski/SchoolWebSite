import React, { useState } from 'react'

interface IAccordionCardProps {
    id: string;
    header: string;
    content?: JSX.Element;
    subItems?: JSX.Element[];
}

const AccordionCard = (props: IAccordionCardProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="accordionCard">

            <div
                className="accordionCard_header"
                onClick={() => setOpen(!open)}
            >
                <span>
                    {props.header}
                </span>
            </div>
            {
                open ?
                    <div className="accordionCard_content">
                        {
                            props.content ?
                                props.content
                                : null
                        }
                        {
                            props.subItems ?
                                <div className="accordionCard_subItems">
                                    {props.subItems}
                                </div>
                                : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default AccordionCard