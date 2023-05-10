import React from 'react';
import {RootStore} from './components/redux/redux-store';

const storeContext = React.createContext<RootStore | null>(null)

export default storeContext