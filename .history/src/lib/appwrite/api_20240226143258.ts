import { INewUser } from "@/types";

export async function createUserAccount(use: INewUser) {
    try {
        const newAccount = await account.create(
            'aaaaaa',.
        )
    } catch (error) {
        console.log(error);
        return error;
    }
}
