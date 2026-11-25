
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
  Users,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  Wallet,
  Receipt,
  Sparkles,
  MoreHorizontal,
  Menu,
} from 'lucide-react'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const weeklyData = [
  { day: 'Mon', income: 5200, expenses: 2100 },
  { day: 'Tue', income: 6800, expenses: 3200 },
  { day: 'Wed', income: 4300, expenses: 1800 },
  { day: 'Thu', income: 7900, expenses: 3600 },
  { day: 'Fri', income: 6100, expenses: 2700 },
  { day: 'Sat', income: 9200, expenses: 4100 },
  { day: 'Sun', income: 6300, expenses: 2400 },
]

const transactions = [
  { name: 'Customer payment', category: 'Sales', date: '25 Nov 2026', amount: 4500, type: 'income' },
  { name: 'Stock purchase', category: 'Inventory', date: '24 Nov 2026', amount: 1850, type: 'expense' },
  { name: 'Hair services', category: 'Services', date: '24 Nov 2026', amount: 2800, type: 'income' },
  { name: 'Electricity', category: 'Utilities', date: '23 Nov 2026', amount: 950, type: 'expense' },
]

const invoices = [
  { client: 'Mpho Trading', number: 'INV-0012', due: '28 Nov 2026', amount: 3200, status: 'Unpaid' },
  { client: 'Lerato Designs', number: 'INV-0011', due: '22 Nov 2026', amount: 1850, status: 'Overdue' },
  { client: 'Kasi Events', number: 'INV-0010', due: '30 Nov 2026', amount: 4500, status: 'Paid' },
]

const money = (amount: number) =>
  `R${amount.toLocaleString('en-ZA')}`

function App() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-7 lg:flex">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white">
              K
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">KasiCash <span className="text-emerald-600">AI</span></h1>
              <p className="text-xs text-slate-400">Smart business finance</p>
            </div>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-2">
            {[
              { label: 'Dashboard', icon: LayoutDashboard, active: true },
              { label: 'Transactions', icon: ArrowLeftRight },
              { label: 'Invoices', icon: FileText },
              { label: 'Customers', icon: Users },
            ].map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                  active
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Icon size={19} />
                {label}
              </div>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="mb-5 rounded-2xl bg-emerald-50 p-4">
              <Sparkles className="mb-3 text-emerald-600" size={22} />
              <p className="font-semibold text-slate-800">Your business, smarter.</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Understand your numbers and make better decisions.
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-600">
                TM
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Business Owner</p>
                <p className="text-xs text-slate-400">Demo workspace</p>
              </div>
              <Settings size={18} className="text-slate-400" />
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <Menu className="text-slate-500 lg:hidden" />
              <div>
                <p className="text-sm text-slate-400">Welcome back 👋</p>
                <h2 className="text-xl font-bold text-slate-900">Business overview</h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 md:flex">
                <Search size={17} className="text-slate-400" />
                <span className="text-sm text-slate-400">Search...</span>
              </div>
              <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500">
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
                <Plus size={17} />
                <span className="hidden sm:inline">New transaction</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </header>

          <div className="mx-auto max-w-[1500px] space-y-7 p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Your financial snapshot</h3>
                <p className="mt-1 text-sm text-slate-500">Here is how your business is performing.</p>
              </div>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500">
                Demo data · November 2026
              </span>
            </div>

            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { title: 'Total income', amount: 'R45,800', change: '+12.5%', icon: TrendingUp, positive: true },
                { title: 'Total expenses', amount: 'R18,400', change: '+4.2%', icon: TrendingDown, positive: false },
                { title: 'Net profit', amount: 'R27,400', change: '+18.3%', icon: Wallet, positive: true },
                { title: 'Outstanding invoices', amount: 'R6,200', change: '3 invoices', icon: Receipt, positive: null },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">{item.title}</p>
                    <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <p className="mt-5 text-2xl font-bold tracking-tight text-slate-900">{item.amount}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {item.positive === true && <span className="font-semibold text-emerald-600">{item.change} </span>}
                    {item.positive === false && <span className="font-semibold text-orange-500">{item.change} </span>}
                    {item.positive === null && <span className="font-semibold text-orange-500">{item.change} </span>}
                    {item.positive === null ? 'Need attention' : 'vs previous month'}
                  </p>
                </div>
              ))}
            </section>

            <section className="grid gap-5 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900">Income vs expenses</h3>
                    <p className="mt-1 text-xs text-slate-400">Weekly financial performance · Demo data</p>
                  </div>
                  <div className="flex gap-4 text-xs font-medium">
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Income</span>
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-400" /> Expenses</span>
                  </div>
                </div>
                <div className="mt-6 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
                      <defs>
                        <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#059669" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#059669" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f4" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(value) => `R${value / 1000}k`} />
                      <Tooltip formatter={(value) => money(Number(value))} />
                      <Area type="monotone" dataKey="income" stroke="#059669" strokeWidth={3} fill="url(#incomeFill)" />
                      <Area type="monotone" dataKey="expenses" stroke="#fb923c" strokeWidth={2} fill="none" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">AI business insight</h3>
                <p className="mt-1 text-xs text-slate-400">Illustrative demo insight</p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Sparkles size={24} />
                </div>
                <h4 className="mt-4 font-semibold text-slate-900">Your profit is growing!</h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your demo figures show income exceeding expenses. Keep monitoring stock and operating costs to protect your profit margin.
                </p>
                <div className="mt-5 rounded-xl bg-emerald-50 p-3">
                  <p className="text-xs font-semibold text-emerald-800">Suggested action</p>
                  <p className="mt-1 text-xs leading-5 text-emerald-700">
                    Review your expenses weekly and follow up on unpaid invoices.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">Recent transactions</h3>
                    <p className="mt-1 text-xs text-slate-400">Your latest business activity · Demo data</p>
                  </div>
                  <button className="text-xs font-semibold text-emerald-600">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs text-slate-400">
                        <th className="pb-3 font-medium">Description</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.name} className="border-b border-slate-50">
                          <td className="py-4">
                            <p className="font-semibold text-slate-800">{transaction.name}</p>
                            <p className="mt-1 text-xs text-slate-400">{transaction.category}</p>
                          </td>
                          <td className="py-4 text-xs text-slate-500">{transaction.date}</td>
                          <td className={`py-4 font-semibold ${transaction.type === 'income' ? 'text-emerald-600' : 'text-slate-700'}`}>
                            {transaction.type === 'income' ? '+' : '-'}{money(transaction.amount)}
                          </td>
                          <td className="py-4">
                            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${transaction.type === 'income' ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-orange-700'}`}>
                              {transaction.type === 'income' ? 'Income' : 'Expense'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">Invoices</h3>
                    <p className="mt-1 text-xs text-slate-400">Recent invoice activity</p>
                  </div>
                  <FileText className="text-slate-400" size={20} />
                </div>
                <div className="space-y-5">
                  {invoices.map((invoice) => (
                    <div key={invoice.number} className="border-b border-slate-100 pb-4 last:border-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{invoice.client}</p>
                          <p className="mt-1 text-xs text-slate-400">{invoice.number} · Due {invoice.due}</p>
                        </div>
                        <MoreHorizontal size={18} className="text-slate-400" />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-bold text-slate-900">{money(invoice.amount)}</p>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' :
                          invoice.status === 'Overdue' ? 'bg-red-50 text-red-600' :
                          'bg-orange-50 text-orange-700'
                        }`}>{invoice.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-2 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                  Manage invoices
                </button>
              </div>
            </section>

            <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 py-5 text-xs text-slate-400">
              <p>© 2026 KasiCash AI. Know your numbers. Grow your business.</p>
              <p>Built for South African small businesses 🇿🇦</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
