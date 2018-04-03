import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Card from '../components/Card';
import CardOutline from '../components/CardOutline';
import CardImage from '../components/CardImage';

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
  .add('Card Outline', () => (
    <CardOutline onClick={action('clicked')} />
  ));

storiesOf('Card', module)
  .add('Card Image', () => (
    <CardImage onClick={action('clicked')} />
  ));

storiesOf('Card', module)
  .add('Card', () => (
    <Card onClick={action('clicked')} />
  ));
