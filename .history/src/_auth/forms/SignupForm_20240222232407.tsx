import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from '@/components/ui/button';

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default SignupForm
