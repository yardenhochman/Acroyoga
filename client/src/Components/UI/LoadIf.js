import React from 'react';
import Media from 'react-media';
import { Desktop, Phone_Portrait } from '../../DeviceRules';

export default {
    Desktop: ({children}) => <Media query={Desktop}>{children}</Media>,
    Portrait: ({children}) => <Media query={Phone_Portrait}>{children}</Media>
}