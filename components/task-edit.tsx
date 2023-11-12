"use client";
import { CalendarIcon, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  categories,
  refresh,
  searchParams,
  session,
  setRefresh,
} from "./session";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character." })
    .max(100, { message: "Title must be at within 100 characters." }),
  description: z
    .string()
    .min(1, { message: "Description must be at least 1 character." }),
  important: z.boolean(),
  completed: z.boolean(),
  completeBy: z.date().min(new Date(Date.now())),
  category: z.string(),
});

export default function TaskEdit({
  show,
  newTask,
  task,
}: {
  show: Function;
  newTask: boolean | undefined;
  task: Task | undefined;
}) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task ? task.title : "",
      description: task ? task.description : "",
      important: task ? task.important : false,
      completed: task ? task.completed : false,
      completeBy: task ? new Date(task.completeBy) : new Date(Date.now()),
      category: task ? task.category.toString() : searchParams.category,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (newTask) {
      const response = await fetch("/api/task/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session?.user.email,
          title: values.title,
          description: values.description,
          important: values.important,
          completed: values.completed,
          completeBy: new Date(values.completeBy),
          category: parseInt(values.category),
        }),
      });
      if (response.ok) {
        toast({
          title: "Task Added Successfully",
          description: values.title + " has been added successfully",
        });
        show(false);
        setRefresh(!refresh);
        router.refresh();
      } else {
        toast({
          title: "Failed to add task",
          description: values.title + " has failed to be added",
          variant: "destructive",
        });
      }
    } else {
      const response = await fetch("/api/task/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: task?.id,
          title: values.title,
          description: values.description,
          important: values.important,
          completed: values.completed,
          completeBy: new Date(values.completeBy),
          category: parseInt(values.category),
        }),
      });
      if (response.ok) {
        toast({
          title: "Task Updated Successfully",
          description: values.title + " has been updated successfully",
        });
        show(false);
        setRefresh(!refresh);
        router.refresh();
      } else {
        toast({
          title: "Failed to update task",
          description: values.title + " has failed to be updated",
          variant: "destructive",
        });
      }
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex backdrop-blur"
      onClick={() => show(false)}
    >
      <div
        className="flex flex-col xl:w-1/3 md:w-1/2 md:mx-auto w-full mx-10 bg-card m-auto p-4 rounded-lg outline outline-1 outline-card-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl">{newTask ? "Create" : "Update"} a Task</h1>
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
                    <Input placeholder="e.g. Refactor my project." {...field} />
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
                      placeholder="e.g. Need to refactor the home page."
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
              name="completeBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="important"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel>Important</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel>Completed</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {true &&
                        categories.map((category) => (
                          <SelectItem
                            value={category.id.toString()}
                            key={category.id}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex gap-4">
              <Button className="w-full" type="submit">
                <Plus /> {newTask ? "Create" : "Update"} Task
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
