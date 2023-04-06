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
    Textarea
} from '@chakra-ui/react'
import { useCreateTask } from '../data/hooks';

const CreateTaskModal = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const mutation = useCreateTask();
	const createTask = () => {
		if (task === "") return;
		const request = { task, description }
		mutation.mutateAsync(request).then(() => {
			setTask("")
			setDescription("")
			onClose()

		})
	}

    return (
        <>
            <Button onClick={onOpen}>Add New Task</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
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
                        <Button onClick={createTask}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateTaskModal;
