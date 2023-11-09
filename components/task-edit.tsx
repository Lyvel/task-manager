"use client";
import { Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function TaskEdit({
  show,
  newTask = false,
  taskId,
}: {
  show: Function;
  newTask: boolean | undefined;
  taskId: number | undefined;
}) {
  console.log(newTask);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex"
      onClick={() => show(false)}
    >
      <div
        className="flex flex-col w-1/3 bg-card m-auto p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl">{newTask ? "Create" : "Update"} a Task</h1>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="e.g. Refactor my project."
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="e.g. Need to refactor the home page."
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="title"
              placeholder="e.g. Refactor my project."
            />
          </div>
          <div className="flex justify-between">
            <Label htmlFor="important">Important</Label>
            <Checkbox id="important"> </Checkbox>
          </div>
          <div className="flex justify-between">
            <Label htmlFor="completed">Completed</Label>
            <Checkbox id="completed"> </Checkbox>
          </div>
          <div className="w-full flex gap-4">
            <Button className="w-full">
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
      </div>
    </div>
  );
}
