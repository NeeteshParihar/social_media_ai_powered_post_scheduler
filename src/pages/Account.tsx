import { useEffect, useState } from "react";
import { dummyAccountsData, PLATFORMS } from "../assets/assets";
import AccountList from "../components/Account/AccountsList";
import AccountHeader from "../components/Account/AccountHeader";
import PlatFormPicker from "../components/Account/PlatFormPicker";

const Account = () => {

  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);

  // get the connectAccounts ids
  const connectedIds = accounts.map((a) => a.platform);
  const handleDisconnect = async (accountId: string) => {
    setAccounts(accounts.filter((a) => a._id !== accountId));
  };
  const fetchAccounts = async (
    isSync = false,
    platform?: string | null,
    successMsg?: string,
  ) => {
    setAccounts(dummyAccountsData); 
    console.log(isSync, platform, successMsg);
  };

  const handleConnect = async (platformId: string) => {
    setConnecting(platformId);
    setTimeout(() => {
      // add the dummy data for now
      setAccounts((prev) => [...prev, dummyAccountsData[0]]);
      // reset the states
      setShowPlatformPicker(false);
      setConnecting(null);
    }, 1000);
  };

  // fetch the data f
  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* header */}
      <AccountHeader
        accountsLen={accounts.length || 0}
        platformLen={PLATFORMS.length || 0}
        handleClick={()=> setShowPlatformPicker(true)}
      />
      {/* platform picker model */}
      {showPlatformPicker && (
        <PlatFormPicker
          connectedIds={connectedIds}
          connecting={connecting}
          onClose={() => setShowPlatformPicker(false)}
          onConnect={handleConnect}
        />
      )}
      {/* Connected accounts list */}
      <AccountList accounts={accounts} onDisconnect={handleDisconnect} />
      
    </div>
  );
};

export default Account;
