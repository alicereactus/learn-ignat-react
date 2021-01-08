import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import HW12 from './HW12';
import ReduxStoreProviderDecorator from '../../decorator/ReduxStoreProviderDecorator';

export default {
  title: 'IGNAT-REACT/HW12',
  component: HW12,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => {
  return <HW12 />
};

export const HW12Story = Template.bind({});