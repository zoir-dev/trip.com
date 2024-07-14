<form
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-8 mt-8"
>
  <FormField
    control={form.control}
    name="fullName"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
          Full Name:
        </FormLabel>
        <FormControl>
          <Input placeholder="Enter your full name" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
          Email Address:
        </FormLabel>
        <FormControl>
          <Input placeholder="Enter your email address" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
          Phone Number:
        </FormLabel>
        <FormControl>
          <Input placeholder="Enter your phone number" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="zipcode"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
          Please enter your US zip code to review your State Specific Plan Document:
        </FormLabel>
        <FormControl>
          <Input placeholder="Enter zip code" {...field} />
        </FormControl>
        <FormDescription className="text-[red]">
          Please enter a 5-digit US zip code
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  {/* <Button type="submit">Submit</Button> */}
</form>
