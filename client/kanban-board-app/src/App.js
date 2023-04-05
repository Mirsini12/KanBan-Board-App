import { Box, Heading } from '@chakra-ui/react'
import CreateTaskModal from './components/CreateTaskModal';

function App() {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white'>
        <Heading> KanBan Board </Heading>
        <CreateTaskModal />
      </Box>
    </>
  );
}

export default App;
