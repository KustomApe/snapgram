import {
    useQuery,
    useMutation,
    useQueryClient,
    useInifiniteQuery,
} from '@tanstack/react-qeury'
import { createUserAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}
