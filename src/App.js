import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { ContainersList, ContainersEdit, ContainersShow } from './containers';
import { LineList, LineEdit, LineShow } from './header_line';
import dataProvider from './dataProvider';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="containers" show={ContainersShow} list={ContainersList} edit={ContainersEdit} />
        <Resource name="lines" show={LineShow} list={LineList} edit={LineEdit} />
    </Admin>
);

export default App;