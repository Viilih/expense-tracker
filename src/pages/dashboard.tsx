import { DataTable } from "@/components/DataTable";
import { PageContainer } from "@/components/PageContainer";
import { AddTransaction } from "@/components/Modal";

export const Dashboard = () => {
  return (
    <PageContainer>
      <div className="w-full p-5 bg-slate-950 rounded-xl shadow-slate-700 shadow-md flex space-x-80">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-slate-500">BalanceT</h2>
          <h2 className="text-3xl text-slate-50 font-bold line leading-5">
            R$15000,00
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-slate-500">Investment</h2>
          <h2 className="text-3xl text-green-500 font-bold line leading-5">
            R$1200,00
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-slate-500">Spents</h2>
          <h2 className="text-3xl text-red-500 font-bold line leading-5">
            R$1200,00
          </h2>
        </div>
      </div>
      <div className="w-full p-5 bg-slate-950 rounded-xl shadow-slate-700 shadow-md flex flex-col">
        <AddTransaction />
        <DataTable />
      </div>
    </PageContainer>
  );
};
