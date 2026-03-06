import { DollarSign, ShoppingCart, Users } from 'lucide-react';
import { StatCard } from './management/statcard';
import { SalesChart } from './management/saleschart';

export default function App() {
  return (
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <StatCard
                title="Total Revenue"
                value="$45,231"
                change="12.5%"
                trend="up"
                icon={DollarSign}
                iconColor="bg-blue-500"
              />
              <StatCard
                title="Total Orders"
                value="1,234"
                change="8.2%"
                trend="up"
                icon={ShoppingCart}
                iconColor="bg-green-500"
              />
              <StatCard
                title="Total Customers"
                value="3,456"
                change="3.1%"
                trend="down"
                icon={Users}
                iconColor="bg-purple-500"
              />
            </div>
            
            <SalesChart />
          </div>
        </main>
  );
}