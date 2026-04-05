"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        preload={true}
      />
      <div className="p-8 w-1/3 text-center shadow-md rounded-lg ">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive mb-4">Could not find requested page</p>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
