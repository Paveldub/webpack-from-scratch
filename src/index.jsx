// const firstConsole = 'first webpack log';
// import json from './assets/json';
// import xmlFile from './assets/data.xml';
// import csvFile from './assets/data';
import './styles/styles.css';
import './styles/styles.scss';
import './babel';

import React from 'react';
import { render } from 'react-dom'

// console.log(firstConsole);
// console.log('JSON:', json);
// console.log('XML:', xmlFile);
// console.log('CSV:', csvFile);

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo" />
        <pre />
        <div className="box">
            <h2>Sass example</h2>
        </div>
    </div>
);

render(<App />, document.getElementById('app'))


