# Somnium

### Description

Somnium is a component library that I built to help me learn react, and to better learn how component libraries worked as a whole. I used storybook so that I could develop components in isolation and so that I could view the components more easily.

<img width="1440" alt="Screen Shot 2019-05-19 at 10 19 07 AM" src="https://user-images.githubusercontent.com/32757215/57985689-862aba00-7a20-11e9-9451-2cd90e2541ea.png">
<img width="1074" alt="Screen Shot 2019-05-19 at 10 28 52 AM" src="https://user-images.githubusercontent.com/32757215/57985729-06e9b600-7a21-11e9-864a-98d94c40a68a.png">
<img width="1076" alt="Screen Shot 2019-05-19 at 10 29 11 AM" src="https://user-images.githubusercontent.com/32757215/57985731-094c1000-7a21-11e9-94b3-7066eca8ea04.png">
<img width="1072" alt="Screen Shot 2019-05-19 at 10 29 23 AM" src="https://user-images.githubusercontent.com/32757215/57985733-0d782d80-7a21-11e9-84cc-4021f89c7dbd.png">

### Built with
My portfolio was built using React & Styled Components and shown through Storybook. The layout for many of the components used CSS Grid.

### Browser Compatibility

IE11, IE 9+ (with Map + Set polyfills), all evergreen browsers
Evergreen browsers include Chrome and Firefox (and derivatives) as they can be updated regardless of operating system version. Edge and Safari should both also work fine since all versions for the last several years support the relevant APIs.

### How to use

#### Installing
This package has not been published on npm. Install from github.
```
npm install https://github.com/jessbradford/somnium 
```

#### Importing & Using
``` jsx
import {Button} from 'somnium';
import React from 'react';

const MyButton = () => {
  return (<Button button="I am button" />);
};
```

### Contributing

#### Getting started Contributing
Clone this directory via this command.
``` bash
git clone https://github.com/jessbradford/somnium
```

To start the project run the following command. 
``` bash
yarn run storybook
```
This will open the project on a http://localhost:9001/.

Make any changes using your favorite editor and view on http://localhost:9001/.


