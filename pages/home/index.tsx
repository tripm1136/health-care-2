import { HomeComponent } from "@/components/home/HomeComponent";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/ui/common/layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
};
export default Homepage;
