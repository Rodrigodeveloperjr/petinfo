import { SubHeader } from "../components/SubHeader";
import { ListPosts } from "../components/ListPosts";
import { Header } from "../components/Header";

const Dashboard = () => {
  return (
    <div className="box-border">
      <Header />
      <SubHeader />
      <ListPosts />
    </div>
  );
};

export { Dashboard };
