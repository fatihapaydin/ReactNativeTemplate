import { NavigationScreenProps } from 'react-navigation';

export interface INavigasyon {
    id: number;
    name: string; ts
}

export interface IBaslangicProps extends NavigationScreenProps<INavigasyon> {

}