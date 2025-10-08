import { useState, useEffect } from "react";

import sdk, { type Context } from "@farcaster/miniapp-sdk";

export default function Main() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.MiniAppContext>();

  useEffect(() => {
    const load = async () => {
      const context = await sdk.context;
      setContext(context);
      sdk.actions.ready({});
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
      return () => {
        sdk.removeAllListeners();
      };
    }
  }, [isSDKLoaded]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          🔄 Domain Updated
        </h1>
        <p className="text-gray-600 mb-6">
          This miniapp has moved to a new domain. Please continue there to use
          the latest version.
        </p>
        <button
          onClick={() => {
            if (!context) {
              window.open("https://counter.itscashless.com", "_blank");
            } else {
              sdk.actions.openMiniApp({
                url: "https://counter.itscashless.com",
              });
            }
          }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300"
        >
          Open New Domain →
        </button>
      </div>
    </div>
  );
}
