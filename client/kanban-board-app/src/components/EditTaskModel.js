import React, { useState } from 'react';
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 Button,
 useDisclosure,
 FormControl,
 FormLabel,
 Input,
 Textarea,
 IconButton
} from '@chakra-ui/react'
import{
 EditIcon
}from '@chakra-ui/icons'
import { useQueryClient } from 'react-query';
import { useUpdateTask } from '../data/hooks';

const EditTaskModal = ({ task }) => {
 const [title, setTitle] = useState(task.task);
 const [description, setDescription] = useState(task.description);
 const { mutateAsync: updateTask } = useUpdateTask(task.status);
 const {isOpen,onClose,onOpen}=useDisclosure();

 const queryClient=useQueryClient();
 const handleUpdateTask = () => {
  updateTask({ ...task, task: title, description })
  .then(_=>{ 
   queryClient.invalidateQueries([task.status])
   onClose()
  })
 }
 return (
  <>
   <IconButton onClick={onOpen} marginLeft={4} size={'sm'} icon={<EditIcon/>}></IconButton>
   <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
     <ModalHeader>Create New Task</ModalHeader>
     <ModalCloseButton />
     <ModalBody>
      <FormControl>
       <FormLabel>Title</FormLabel>
       <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl>
       <FormLabel>Description</FormLabel>
       <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>
     </ModalBody>

     <ModalFooter>
      <Button colorScheme='blue' mr={3} variant='ghost' onClick={onClose}>
       Cancel
      </Button>
      <Button onClick={handleUpdateTask}>Save</Button>
     </ModalFooter>
    </ModalContent>
   </Modal>
  </>
 );
}

export default EditTaskModal;
