import React from 'react';
import { Card, CardHeader, CardBody, CardFooter,Heading,Button } from '@chakra-ui/react';
const Task = ({task}) => {
    
    return (
        <Card>
            <CardHeader><Heading size={'sm'}>{task.task}</Heading>  </CardHeader>
            <CardBody>{task.description}</CardBody>
            <CardFooter><Button >Delete</Button></CardFooter>
        </Card>
    );
}

export default Task;
