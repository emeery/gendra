import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ItemList from './ItemList';
import ItemSearcher from './ItemSearcher'

const Items = () => {
    return (
        <div>
            <ItemSearcher />
            <ItemList />
        </div>
    );
};
export default Items;