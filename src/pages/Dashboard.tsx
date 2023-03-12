import { SubHeader } from "../components/SubHeader";
import { ListPosts } from "../components/ListPosts";
import { Header } from "../components/Header";
import React from "react";
import { ModalBackground } from "../components/ModalBackground";
import { ModalRemovePost } from "../components/ModalRemovePost";

const Dashboard = () => {
  return (
    <React.Fragment>
      {
        <ModalBackground>
          <ModalRemovePost />
        </ModalBackground>
      }
      <div className="box-border">
        <Header />
        <SubHeader />
        <ListPosts />
      </div>
    </React.Fragment>
  );
};

export { Dashboard };
