import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const transactions = [
  {
    id: 1,
    title: "Groceries",
    amount: -2400,
    date: "Today",
  },
  {
    id: 2,
    title: "Salary",
    amount: 45000,
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Netflix",
    amount: -649,
    date: "2 days ago",
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <HugeiconsIcon icon={IndianRupee} /> 5000
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <HugeiconsIcon icon={IndianRupee} /> 10000
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <HugeiconsIcon icon={IndianRupee} /> 50000
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>Recent transactions</CardHeader>

        <CardContent>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >
              <p className="font-medium">{transaction.title}</p>
              <p className="text-sm text-muted-foreground">
                {transaction.date}
              </p>
              <p className="font-semibold">{transaction.amount}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
