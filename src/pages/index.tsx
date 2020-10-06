import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";
import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";

const Index = () => {
  return (
    <>
      <Nav />
      <Layout>
        <Intro />
        <Projects />
        {/* <Footer/> */}
      </Layout>
    </>
  );
};

export default Index;
