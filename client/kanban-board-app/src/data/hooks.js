import { useMutation, useQuery, QueryClient} from "react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export function useFetchTasks(status){
    return useQuery({
     queryKey:[status],
     queryFn:()=> axios.get(`http://localhost:8000/tasks?status=${status}`)
     .then(res=>res.data)
    })
 }

 export function useCreateTask(){
    return useMutation({
       mutationFn:(request)=>axios.post("http://localhost:8000/tasks",request),
       onSuccess:()=> queryClient.invalidateQueries({queryKey:['new']})
    })
}