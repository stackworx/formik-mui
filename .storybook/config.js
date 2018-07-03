import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.stories.js');
}

configure(loadStories, module);
