import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const SignupForm = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
   
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default SignupForm
