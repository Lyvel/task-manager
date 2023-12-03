"use client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ColourPicker } from "../misc/colour-picker";
import { refresh, session, setRefresh } from "../providers/session-provider";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character." })
    .max(100, { message: "Title must be at within 100 characters." }),
  description: z.string(),
  colour: z.string(),
});

export default function CategoryNew({
  show,
  newCategory,
  category,
}: {
  show: Function;
  newCategory?: boolean | undefined;
  category?: Category | undefined;
}) {
  const [background, setBackground] = useState("#ffffff");
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: category ? category.title : "",
      description: category ? category.description : "",
      colour: category ? category.colour : "#ffffff",
    },
  });
  useEffect(() => {
    form.setValue("colour", background);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [background]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (newCategory) {
      const response = await fetch("/api/category/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session?.user.email,
          title: values.title,
          description: values.description,
          colour: values.colour,
        }),
      });
      if (response.ok) {
        toast({
          title: "Category Added Successfully",
          description: values.title + " has been added successfully",
        });
        show(false);
        setRefresh(!refresh);
        router.refresh();
      } else {
        toast({
          title: "Failed to add category",
          description: values.title + " has failed to be added",
          variant: "destructive",
        });
      }
    } else {
      const response = await fetch("/api/category/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: category?.id,
          title: values.title,
          description: values.description,
          colour: values.colour,
        }),
      });
      if (response.ok) {
        toast({
          title: "Category Updated Successfully",
          description: values.title + " has been updated successfully",
        });
        show(false);
        router.refresh();
      } else {
        toast({
          title: "Failed to update category",
          description: values.title + " has failed to be updated",
          variant: "destructive",
        });
      }
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex backdrop-blur z-50"
      onClick={() => show(false)}
    >
      <div
        className="flex flex-col xl:w-1/3 md:w-1/2 md:mx-auto w-full mx-10 bg-card m-auto p-4 rounded-lg outline outline-1 outline-card-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl">
          {newCategory ? "Create" : "Update"} a Category
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Work." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. All my work tasks."
                      className="max-h-[32rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="colour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Folder Colour</FormLabel>
                  <FormControl>
                    <div className="flex flex-col">
                      <Input className="hidden" {...field} value={background} />
                      <ColourPicker
                        className="w-full"
                        background={background}
                        setBackground={setBackground}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex gap-4">
              <Button className="w-full" type="submit">
                <Plus /> {newCategory ? "Create" : "Update"} Category
              </Button>
              <Button
                variant={"destructive"}
                className="w-full"
                onClick={() => show(false)}
              >
                <X /> Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
