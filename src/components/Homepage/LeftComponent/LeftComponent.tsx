import * as React from "react";
import "./LeftComponent.css";
import CreatePostBar from "./CreatePostBar/CreatePostBar";
import SortingBar from "./SortingBar/SortingBar";

export default function LeftComponent() {
  return (
    <div id="leftComponent">
      <CreatePostBar />
      <div>
        <SortingBar />
      </div>
    </div>
  );
}
