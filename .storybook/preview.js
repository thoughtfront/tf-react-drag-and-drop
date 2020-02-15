import React from 'react';
import { configure, addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import ThemeProvider from '../src/theme';

// addDecorator(withInfo);
//
// addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

// function loadStories() {
// 	require('../stories');
// }

const stories = require.context('../stories', true, /\.stories\.js$/)

configure(stories, module);