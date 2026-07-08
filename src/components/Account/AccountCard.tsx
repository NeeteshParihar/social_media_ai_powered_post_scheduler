import {
  AlertCircleIcon,
  CheckCircleIcon,
  UnplugIcon,
} from "lucide-react";

const AccountCard = ({meta, account, handleDisconnect}) => {

    console.log("inside the accountCard");
    console.log(account._id);

    return  <div
            className="group bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-300 transition-all"
          >
            {/* icon */}
            <div className=" size-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
              <meta.icon className="size-6 text-slate-500" />
            </div>
            {/* acount detail */}
            <div>
              <div className="text-slate-900 truncate">{account.handle}</div>
              <div className="text-sm items-center gap-1.5 shrink-0">
                {" "}
                {meta.name}{" "}
              </div>
            </div>

            <div className="flex-1"/>            

             {/* icons */}
            <div className="flex items-center gap-1.5 shrink-0">
              {account.status === "connected" ? (
                <>
                  <CheckCircleIcon className="size-4 text-emerald-500" />
                  <span className="text-xs"> Connected </span>
                </>
              ) : (
                <>
                  <AlertCircleIcon className="size-4 text-amber-500" />
                  <span className="text-xs text-amber-600">Disconnect</span>
                </>
              )}
            </div>

            {/* disconnect button */}
            <button
              onClick={() => handleDisconnect(account._id)}
              title="Disconnect account"
              className="ml-2 p-1.5 rounded-lg text-slate-300 group-hover:text-red-500 transition-all"
            >
              <UnplugIcon className="size-4" />
            </button>
          </div>
}

export default AccountCard;