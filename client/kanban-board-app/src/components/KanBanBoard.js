import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import KanBanColumn from './KanBanColumns';
//create ui
import { statuses } from '../data/statuses';
const KanBanBoard = () => {

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {statuses.map(status=><KanBanColumn key={status.value} status={status} />)}           
            
        </Grid>
    );
}

export default KanBanBoard;