import { SubHeader } from "../components/SubHeader";
import { ListPosts } from "../components/ListPosts";
import { Header } from "../components/Header";
import React from "react";
import { ModalBackground } from "../components/ModalBackground";
import { ModalRemovePost } from "../components/ModalRemovePost";
import { ModalCreatePost } from "../components/ModalCreatePost";
import { ModalEditPost } from "../components/ModalEditPost";
import { ModalViewPost } from "../components/ModalViewPost";
import { ModalSuccess } from "../components/ModalSuccess";

const Dashboard = () => {
  return (
    <React.Fragment>
      {
        <ModalSuccess />
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
