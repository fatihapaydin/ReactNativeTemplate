import { NavigationScreenProps } from 'react-navigation';

export interface INavigasyon {
    id: number;
    name: string;
}

export interface IBaslangicProps extends NavigationScreenProps<INavigasyon> {

}