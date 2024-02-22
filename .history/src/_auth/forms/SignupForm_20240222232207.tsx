import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button';

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
  },
})

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}

const SignupForm = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default SignupForm
