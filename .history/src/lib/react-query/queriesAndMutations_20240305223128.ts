import {
    useQuery,
    useMutation,
    useQueryClient,
    useInifiniteQuery,
} from '@tanstack/react-qeury'
import { createUserAccount, signInAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email:string,
            password: string,
        }) => signInAccount(user)
    })
}
