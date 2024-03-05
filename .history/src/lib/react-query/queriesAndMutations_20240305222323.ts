import {
    useQuery,
    useMutation,
    useQueryClient,
    useInifiniteQuery,
} from '@tanstack/react-qeury'
import { createUserAccount } from '../appwrite/api'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: () => createUserAccount(user)
    })
}
