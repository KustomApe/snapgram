import { z } from 'zod';

const formSchema = z.object({
    username: z.string().min
})
