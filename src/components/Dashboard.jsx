import React from "react";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-orange-100 p-4">
                <h1 className="text-xl font-bold text-orange-600 mb-6">ルックミール</h1>
                <nav>
                    <ul className="space-y-4">
                        <li className="text-orange-600 font-semibold">ダッシュボード</li>
                        <li className="text-gray-700 hover:text-orange-600 cursor-pointer">
                            登録ユーザー
                        </li>
                        <li className="text-gray-700 hover:text-orange-600 cursor-pointer">
                            当選者
                        </li>
                        <li className="text-gray-700 hover:text-orange-600 cursor-pointer">
                            運営管理者
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">ダッシュボード</h2>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {[
                        { label: "ユーザー登録数累計", value: "450人", change: "12.5%" },
                        { label: "アクティブユーザー", value: "50人/月", change: "316.6%" },
                        { label: "定着率", value: "10%/前月", change: "-16.6%" },
                        { label: "平均検索回数", value: "4回/月", change: "100%" },
                        { label: "抽選利用回数", value: "125回/月", change: "47%" },
                        { label: "アカウント削除数", value: "10人/月", change: "25%" },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                        >
                            <h3 className="text-sm text-gray-500">{card.label}</h3>
                            <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                            <span
                                className={`text-sm font-medium ${card.change.startsWith("-") ? "text-red-500" : "text-green-500"
                                    }`}
                            >
                                {card.change}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">性別・年代比</h3>
                    <div className="w-full h-64 bg-orange-100 rounded-lg flex items-center justify-center">
                        {/* Placeholder for Chart */}
                        <span className="text-gray-500">Chart Placeholder</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
