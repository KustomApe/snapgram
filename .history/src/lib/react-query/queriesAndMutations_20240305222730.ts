import {
    useQuery,
    useMutation,
    useQueryClient,
    useInifiniteQuery,
} from '@tanstack/react-qeury'
import { createUserAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}
