import {
  PlusIcon,
} from "lucide-react";
import { PLATFORMS } from "../../assets/assets";
import AccountCard from "./AccountCard";

interface AccountListProps {
  accounts: any[];
  onDisconnect: (accountId: string) => Promise<void>;
}

const AccountList = ({ accounts, onDisconnect }: AccountListProps) => {

  const handleDisconnect = async (accountId: string) => {
    const confirm = window.confirm("Are you sure? to disconnect account!");
    if (!confirm) return;
    await onDisconnect(accountId);
  };

  if (accounts.length === 0) {
    return (
      <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center py-20 px-6">
        <div className="size-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100">
          <PlusIcon />
        </div>
        <p className="text-slate-700 text-lg"> No accounts connected </p>
        <p className="text-sm text-slate-400 mt-1 max-w-xs text-center">
          Connect your first social platform to start scheduling and automating
          your content
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {accounts.map((account, index) => {
        const meta = PLATFORMS.find((p) => p.id === account.platform);
        if (!meta) return null;
        return (
            <AccountCard key={index} meta={meta} account={account} handleDisconnect={handleDisconnect} />
        );
      })}
    </div>
  );
};

export default AccountList;
