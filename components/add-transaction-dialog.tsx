"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function AddTransactionDialog() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transaction Saved!");
  };

  return (
    <Dialog>
      <DialogTrigger render={<Button className="w-full flex gap-2" />}>
        <HugeiconsIcon icon={Plus} size={18} />
        Add Transaction
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" placeholder="e.g. Groceries" required />
          </Field>

          <Field>
            <FieldLabel htmlFor="amount">Amount (₹)</FieldLabel>
            <Input id="amount" type="number" placeholder="0.00" required />
          </Field>

          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Input id="category" placeholder="e.g. Food" required />
          </Field>

          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full">
              Save Transaction
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
