import React, { useState,useEffect } from 'react';
import { GridItem,Badge,Stack ,Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
import axios from "axios";
import Task from './Task';



const KanBanColumn = ({status}) => {
    const [tasks,setTasks]=useState([]);
   useEffect(() => {
       axios.get(`http://localhost:8000/tasks?status=${status.value}`)
       .then(res=>(setTasks(res.data)));
        
    }, []);
   
    return (       
        <GridItem w='100%' h='10'>
            <Badge color={status.color}>{status.label}</Badge>
            <Stack> {tasks.map(task=><Task key={task._id} task={task}/> )}</Stack>
        </GridItem>
        
    )
}

export default KanBanColumn;
