import {
  ActivityIcon,
  CheckCircleIcon,
  ClockIcon,
  Share2Icon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyAccountsData, dummyActivityData, dummyPostsData } from "../assets/assets";
import StatCard from "../components/Dashboard/StatsCards";
import Activity from "../components/Dashboard/Activity";

const Dashboard = () => {

  const [stats, setStats] = useState({
    scheduled: 0,
    published: 0,
    connectedAccounts: 0,
  });
  const [activities, setActivites] = useState<any[]>([]);
  const statsCards = [
    {
      label: "Scheduled Posts",
      value: stats.scheduled,
      icon: ClockIcon,
      trend: "+2 today",
    },
    {
      label: "Published Posts",
      value: stats.published,
      icon: CheckCircleIcon,
      trend: "All Time",
    },
    {
      label: "Connected Accounts",
      value: stats.connectedAccounts,
      icon: Share2Icon,
      trend: "Active",
    },
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [postsRes, accountsRes, activityRes] = [
          { data: dummyPostsData },
          { data: dummyAccountsData },
          { data: dummyActivityData },
        ];
        const posts = postsRes.data;
        setStats({
            scheduled: posts.filter( (p:any)=> p.status === "scheduled" ).length,
            published: posts.filter( (p:any)=> p.status === "published" ).length,
            connectedAccounts: accountsRes.data.filter( (a: any) => a.status === "connected" ).length
        })
        setActivites(activityRes.data);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };
    fetchDashboardData();
  }, []);
  
  return (
    <div className="space-y-8 max-w-4xl">
      {/* welcome bar */}
      <div className="">
        <h2 className="text-2xl text-slate-900"> Good Morning! 👋 </h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Here's whats happening with your social accounts today.
        </p>
      </div>
      {/* stat cards-grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsCards.map((card) => {
          return (
           <StatCard key={card.label} card={card}/>
          );
        })}
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {/* top */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-slate-900">Recent Activity</h2>
          <span className="text-sm text-slate-400">
            {" "}
            {activities.length} events{" "}
          </span>
        </div>
        {/* activities */}
        {activities.length == 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="size-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
              <ActivityIcon className="size-6 text-slate-400" />
            </div>
            <p className="text-slate-500"> No activity yet! </p>
            <p className="text-slate-400 text-sm mt-1">
              {" "}
              Connect accounts and schedule posts to see events here.{" "}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {activities.map((activity) => (
              <Activity key={activity._id} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
