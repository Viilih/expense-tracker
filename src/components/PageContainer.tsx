export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-900 p-8 w-full flex flex-col space-y-6">
      {children}
    </div>
  );
};
