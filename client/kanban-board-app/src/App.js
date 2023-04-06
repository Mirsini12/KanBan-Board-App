import { Box, Heading } from '@chakra-ui/react'
import CreateTaskModal from './components/CreateTaskModal';
import KanBanBoard from './components/KanBanBoard';

function App() {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white'>
        <Heading> KanBan Board </Heading>
        <CreateTaskModal />
      </Box>
      <KanBanBoard/>
    </>
  );
}

export default App;
