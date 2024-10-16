"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  search: z.string().max(50).optional(),
  location: z.string().max(50).optional(),
  fullTime: z.boolean().optional(),
});

function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      location: "",
      fullTime: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const params = new URLSearchParams(searchParams);
    if (values.search) {
      params.set("search", values.search);
    } else {
      params.delete("search");
    }
    if (values.location) {
      params.set("location", values.location);
    } else {
      params.delete("location");
    }
    if (values.fullTime) {
      params.set("fullTime", values.fullTime.toString());
    } else {
      params.delete("fullTime");
    }
    params.delete("page");
    replace(`/?${params.toString()}`);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-[5fr,_5fr,_6fr] bg-card rounded-xl"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 px-6 border-r border-secondary-4">
                <FaMagnifyingGlass className="text-2xl text-primary-1" />
                <FormControl>
                  <Input
                    placeholder="Filter by title..."
                    className="bg-transparent text-[1rem] border-none outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 px-6 border-r border-secondary-4">
                <FaMapMarkerAlt className="text-2xl text-primary-1" />
                <FormControl>
                  <Input
                    placeholder="Filter by location..."
                    className="bg-transparent text-[1rem] border-none outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullTime"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 px-6 py-4 justify-between">
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      className="w-6 h-6"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    ></Checkbox>
                  </FormControl>
                  <FormLabel className="text-primary-3 dark:text-secondary-1 font-bold text-[1rem]">
                    Full Time <span className="max-lg:hidden">Only</span>
                  </FormLabel>
                </div>
                <Button type="submit">Search</Button>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
export default SearchBar;
