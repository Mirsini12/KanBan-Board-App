import React  from 'react';
import { GridItem,Badge,Stack} from '@chakra-ui/react';
import Task from './Task';
import { useFetchTasks } from '../data/hooks';


const KanBanColumn = ({status}) => {
//     const [tasks,setTasks]=useState([]);
//    useEffect(() => {
//        axios.get(`http://localhost:8000/tasks?status=${status.value}`)
//        .then(res=>(setTasks(res.data)));
        
//     }, []);
    const {data,isLoading,isError} = useFetchTasks(status.value)
   
    return (       
        <GridItem w='100%' h='10'>
            <Badge color={status.color}>{status.label}</Badge>
            <Stack> {data?.map(task=><Task key={task._id} task={task}/> )}</Stack>
        </GridItem>
        
    )
}

export default KanBanColumn;
