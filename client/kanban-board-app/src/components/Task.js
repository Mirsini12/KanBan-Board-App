import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDeleteTask } from '../data/hooks';
const Task = ({ task }) => {
 const { mutate: deleteTask } = useDeleteTask(task.status);
 const handleDelete = () => {
  deleteTask(task._id)
 }
 return (
  <Card>
   <CardHeader><Heading size={'sm'}>{task.task}</Heading>  </CardHeader>
   <CardBody>{task.description}</CardBody>
   <CardFooter>
    <IconButton size={'sm'} onClick={handleDelete} mr={4} icon={<DeleteIcon />}> </IconButton>
   </CardFooter>
  </Card>
 );
}

export default Task;
