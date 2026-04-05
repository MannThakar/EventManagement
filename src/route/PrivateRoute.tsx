"use client";

import Loader from "@/components/common/Loader";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PrivateRoute<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  return function ProtectedComponent(props: P) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const session = localStorage.getItem("session");

      if (!session) {
        router.push("/sign-in");
      } else {
        setIsLoading(false);
      }
    }, [router]);

    if (isLoading) {
      return <Loader />;
    }

    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}

export default PrivateRoute;
