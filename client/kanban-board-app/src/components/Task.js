import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, IconButton,Button,Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react';
import { DeleteIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useDeleteTask, useUpdateTask } from '../data/hooks';
import { useQueryClient } from 'react-query';
import {statuses} from '../data/statuses';
const Task = ({ task }) => {

  const taskStatus = statuses.find(status => status.value === task.status);
  const otherStatuses = statuses.filter(status => task.status !== status.value)
  const { mutate: deleteTask } = useDeleteTask(task.status);
  const { mutateAsync: updateTask } = useUpdateTask(task.status);
  const queryClient = useQueryClient();
  const handleDelete = () => {
    deleteTask(task._id)
  }

  const handleUpdate = (status) => {
    const oldStatus = task.status;
    updateTask({ ...task, status })
      .then(_ => {
        queryClient.invalidateQueries([status])
        queryClient.invalidateQueries([oldStatus])

      })
  }

  return (
    <Card>
      <CardHeader><Heading size={'sm'}>{task.task}</Heading>  </CardHeader>
      <CardBody>{task.description}</CardBody>
      <CardFooter>
        <IconButton size={'sm'} onClick={handleDelete} mr={4} icon={<DeleteIcon />}> </IconButton>
        <Menu>
          <MenuButton as={Button} size={'sm'} bgColor={taskStatus.color} rightIcon={<ChevronDownIcon />}>
            {taskStatus.label}
          </MenuButton>
          <MenuList>
            {otherStatuses.map(status => (<MenuItem key={status.value} onClick={() => handleUpdate(status.value)} color={status.color}>{status.label}</MenuItem>))}
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
  );
}

export default Task;
