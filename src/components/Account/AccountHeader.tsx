import { PlusIcon } from "lucide-react";

const AccountHeader = ({accountsLen, platformLen, handleClick }: {
    accountsLen: number;
    platformLen: number;
    handleClick: () => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
      <div className="">
        <h2 className="text-xl text-slate-900"> Connected Accounts </h2>
        <p className="text-slate-500 text-sm mt-0.5">
          {" "}
          {accountsLen} of {platformLen} platforms connected{" "}
        </p>
      </div>
      <button onClick={handleClick} className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center">
        {" "}
        <PlusIcon className="size-4" /> Connect Account{" "}
      </button>
    </div>
  );
};

export default AccountHeader;
