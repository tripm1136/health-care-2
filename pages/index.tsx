import { useRouter } from "next/router";
import * as React from "react";
const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/home");
  });
  return <div>sadfsd</div>;
};
export default Index;
