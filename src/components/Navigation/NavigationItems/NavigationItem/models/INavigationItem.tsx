export interface INavigationItem {
    id: string;
    text: string;
    path: string;
    subItems?: INavigationItem[];
}