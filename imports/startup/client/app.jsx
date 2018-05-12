import {Meteor} from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';

let app = new PIXI.Application({width: 256, height: 256});

Meteor.startup(() => {
    ReactDOM.render(
        <MainLayout/>,
        document.getElementById('app')
    );
    document.body.appendChild(app.view);
});
