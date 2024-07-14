import React from 'react'

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipcode: "",
    },
  });

const PromoCodes = () => {
  return (
    <div>PromoCodes</div>
  )
}

export default PromoCodes