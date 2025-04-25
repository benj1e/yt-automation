import React from "react";

const Main = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-50">
            <div className="p-8 flex items-center justify-between border-b border-gray-100">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <img
                    src="/src/assets/img.png"
                    alt=""
                    className="w-13 rounded-full"
                />
            </div>

            {/*Stats Section  */}
            <div className="px-8 w-full flex items-center gap-10 justify-between mt-8">
                <div className="border border-gray-200 rounded-md p-6 w-full">
                    <h2 className="text-xl text-gray-700">Total Posts</h2>
                    <p className="text-3xl font-bold">15</p>
                </div>
                <div className="border border-gray-200 rounded-md p-6 w-full">
                    <h2 className="text-xl text-gray-700">Videos Generated</h2>
                    <p className="text-3xl font-bold">10</p>
                </div>
                <div className="border border-gray-200 rounded-md p-6 w-full">
                    <h2 className="text-xl text-gray-700">Errors Logged</h2>
                    <p className="text-3xl font-bold">5</p>
                </div>
            </div>

            {/* Activity Section */}
            <div className="max-w-full mt-18 px-8">
                <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                <table className="border border-gray-200 p-4 w-full rounded-lg">
                    <thead className="rounded-xl">
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Source</th>
                            <th className="border border-gray-300 p-2">Title</th>
                            <th className="border border-gray-300 p-2">Platform</th>
                            <th className="border border-gray-300 p-2">Status</th>
                            <th className="border border-gray-300 p-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">Reddit</td>
                            <td className="border border-gray-300 p-2">Lorem ipsum dolor sit amet.</td>
                            <td className="border border-gray-300 p-2">YouTube</td>
                            <td className="border border-gray-300 p-2">Published</td>
                            <td className="border border-gray-300 p-2">2 hours ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;
