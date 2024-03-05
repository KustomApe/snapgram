import { ID } from 'appwrite';

import { INewUser } from "@/types";
import { account, avatars } from './config';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials
        return newAccount;

    } catch (error) {
        console.log(error);
        return error;
    }
}
