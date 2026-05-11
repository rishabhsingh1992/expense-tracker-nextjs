import { Card, CardContent } from "@/components/ui/card";

const allTransactions = [
  {
    id: 1,
    title: "Groceries",
    subtitle: "May 11, 2024 • Shopping",
    amount: "- ₹2,400",
    amountColor: "text-gray-900",
  },
  {
    id: 2,
    title: "Salary",
    subtitle: "May 10, 2024 • Income",
    amount: "+ ₹45,000",
    amountColor: "text-green-600",
  },
  {
    id: 3,
    title: "Netflix",
    subtitle: "May 09, 2024 • Entertainment",
    amount: "- ₹649",
    amountColor: "text-gray-900",
  },
  {
    id: 4,
    title: "Gym",
    subtitle: "May 08, 2024 • Health",
    amount: "- ₹1,500",
    amountColor: "text-gray-900",
  },
  {
    id: 5,
    title: "Internet",
    subtitle: "May 07, 2024 • Utilities",
    amount: "- ₹999",
    amountColor: "text-gray-900",
  },
  {
    id: 6,
    title: "Amazon",
    subtitle: "May 06, 2024 • Shopping",
    amount: "- ₹3,200",
    amountColor: "text-gray-900",
  },
  {
    id: 7,
    title: "Dinner",
    subtitle: "May 05, 2024 • Food",
    amount: "- ₹1,800",
    amountColor: "text-gray-900",
  },
  {
    id: 8,
    title: "Uber",
    subtitle: "May 04, 2024 • Transport",
    amount: "- ₹350",
    amountColor: "text-gray-900",
  },
  {
    id: 9,
    title: "Music",
    subtitle: "May 03, 2024 • Entertainment",
    amount: "- ₹99",
    amountColor: "text-gray-900",
  },
  {
    id: 10,
    title: "Rent",
    subtitle: "May 01, 2024 • Housing",
    amount: "- ₹25,000",
    amountColor: "text-gray-900",
  },
  {
    id: 11,
    title: "Bonus",
    subtitle: "Apr 28, 2024 • Income",
    amount: "+ ₹12,000",
    amountColor: "text-green-600",
  },
  {
    id: 12,
    title: "Coffee",
    subtitle: "Apr 27, 2024 • Food",
    amount: "- ₹220",
    amountColor: "text-gray-900",
  },
  {
    id: 13,
    title: "Gas",
    subtitle: "Apr 25, 2024 • Transport",
    amount: "- ₹2,500",
    amountColor: "text-gray-900",
  },
  {
    id: 14,
    title: "Movie",
    subtitle: "Apr 24, 2024 • Entertainment",
    amount: "- ₹800",
    amountColor: "text-gray-900",
  },
  {
    id: 15,
    title: "Pharmacy",
    subtitle: "Apr 22, 2024 • Health",
    amount: "- ₹1,200",
    amountColor: "text-gray-900",
  },
  {
    id: 16,
    title: "Freelance",
    subtitle: "Apr 20, 2024 • Income",
    amount: "+ ₹8,000",
    amountColor: "text-green-600",
  },
  {
    id: 17,
    title: "Zomato",
    subtitle: "Apr 18, 2024 • Food",
    amount: "- ₹450",
    amountColor: "text-gray-900",
  },
  {
    id: 18,
    title: "Electric",
    subtitle: "Apr 15, 2024 • Bills",
    amount: "- ₹1,100",
    amountColor: "text-gray-900",
  },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <Card>
        <CardContent className="p-0">
          {allTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 border-b last:border-0"
            >
              <div>
                <p className="font-semibold text-gray-900">{tx.title}</p>
                <p className="text-sm text-gray-500">{tx.subtitle}</p>
              </div>
              <p className={`font-bold ${tx.amountColor}`}>{tx.amount}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
