import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import KanBanColumn from './KanBanColumns';
//create ui
const statuses = [{ value: "new", label: "New", color: "green.300" }, { value: "ready", label: "Ready", color: "red.300" }, { value: "in_progress", label: "In progress", color: "orange.300" }, { value: "done", label: "Done", color: "blue.300" }];
const KanBanBoard = () => {

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {statuses.map(status=><KanBanColumn key={status.value} status={status} />)}           
            
        </Grid>
    );
}

export default KanBanBoard;