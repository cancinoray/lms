import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 flex-col hidden w-56 h-full md:flex">
        <Sidebar />
      </div>
      <main className="md:pl-56">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
