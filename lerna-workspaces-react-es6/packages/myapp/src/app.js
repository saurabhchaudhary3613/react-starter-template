import React from 'react';
import { Header } from 'shared';
import { HomePage } from './features/home/home-page';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header>React Template</Header>
                <HomePage />
            </div>
        );
    }
}
