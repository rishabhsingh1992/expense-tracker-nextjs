import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const budgets = [
  {
    id: 1,
    category: "Food & Drinks",
    displayAmount: "₹4,500 / ₹10,000",
    barWidth: "45%",
    barColor: "bg-orange-500",
    statusText: "55% of budget remaining",
    statusColor: "text-gray-500",
  },
  {
    id: 2,
    category: "Entertainment",
    displayAmount: "₹2,000 / ₹5,000",
    barWidth: "40%",
    barColor: "bg-purple-500",
    statusText: "60% of budget remaining",
    statusColor: "text-gray-500",
  },
  {
    id: 3,
    category: "Transport",
    displayAmount: "₹3,500 / ₹3,000",
    barWidth: "100%",
    barColor: "bg-red-500",
    statusText: "Over budget by ₹500",
    statusColor: "text-red-500",
  },
];

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Budgets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => (
          <Card key={budget.id}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{budget.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">{budget.displayAmount}</p>
              
              {/* Progress Bar Container */}
              <div className="w-full bg-gray-200 h-2 rounded-full">
                {/* The "Filling" part of the bar */}
                <div 
                  className={`${budget.barColor} h-2 rounded-full`} 
                  style={{ width: budget.barWidth }}
                ></div>
              </div>
              
              <p className={`text-xs mt-2 ${budget.statusColor}`}>
                {budget.statusText}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
