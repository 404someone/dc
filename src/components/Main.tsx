import { useState, useEffect } from "react";

import sdk from "@farcaster/miniapp-sdk";
//import sdk, { type Context } from "@farcaster/miniapp-sdk";

export default function Main() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
 /// const [context, setContext] = useState<Context.MiniAppContext>();

  useEffect(() => {
    const load = async () => {
   //   const context = await sdk.context;
      //setContext(context);
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
    <div className="min-h-screen w-full bg-yellow-50 flex flex-col items-center justify-center text-yellow-800 text-center px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>

        <h2 className="text-xl font-semibold mb-2">
          Sorry for the inconvenience
        </h2>
        <p className="text-base">
          This miniapp is currently undergoing maintenance.
        </p>
      </div>
  );
}
