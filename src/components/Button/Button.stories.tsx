// import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color'},
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  size: 'large',
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  primary: false,
  label: 'Secondary',
  size: 'medium'
};
