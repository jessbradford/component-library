import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import CardContainer from '../containers/CardContainer';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} >
      <span role="img" aria-label="emojies">😀 😎 👍 💯</span>
    </Button>
  ));

storiesOf('Card', module)
  .add('Card', () => (
    <CardContainer onClick={action('clicked')} />
  ));
