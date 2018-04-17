import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import Button from '../components/Button';
import Card from '../components/Card';
import CardFooter from '../components/CardFooter';
import CardImage from '../components/CardImage';
import CardOutline from '../components/CardOutline';
import CardPage from '../components/CardPage';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Somnium from '../components/Somnium';

storiesOf('Somnium', module)
  .add('Somnium', () => (
    <Somnium webtitle="SOMNIUM" />
  ));

storiesOf('Button', module)
  .add('Button', () => (
    <Button onClick={action('clicked')} button="I am a button" />
  ));

storiesOf('Card', module)
  .add('Card Outline', () => (
    <CardOutline onClick={action('clicked')} />
  ))
  .add('Card Footer', () => (
    <CardFooter onClick={action('clicked')} date={moment().format('LL')} />
  ))
  .add('Card Image', () => (
    <CardImage onClick={action('clicked')} />
  ))
  .add('Card', () => (
    <Card onClick={action('clicked')} />
  ))
  .add('Card Page', () => (
    <CardPage />
  ));

storiesOf('Divider', module)
  .add('Divider', () => (
    <Divider />
  ));

storiesOf('Header', module)
  .add('Header', () => (
    <Header headerTitle="This is a Title" />
  ));

storiesOf('Modal', module)
  .add('Modal', () => (
    <div>
      <CardPage />
      <Modal message="This is a message" />
    </div>
  ));
