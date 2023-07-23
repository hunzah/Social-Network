import React from 'react';
import {RootState} from './components/redux/redux-store';

const storeContext = React.createContext<RootState | null>(null)

export default storeContext