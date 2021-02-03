export interface IAccordion {
    id: string;
    header: string;
    content?: JSX.Element;
    subItems?: IAccordion[];
}