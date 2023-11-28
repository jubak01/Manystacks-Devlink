import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavBar.module.css";

export function NavBar({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "componentcontainer", "navbar")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbartopcontainer")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "logoachangermdr")}
          loading="lazy"
          width="52"
          height="26"
          src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f7c70845fb7bb84b38c9_Group-6.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "navbarelementcontainer")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbarelementunselected")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f7c77ff69649417a1115_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbarelementselected")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f9337d1129030a6fef25_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "navbarelementunselected")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "", "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f7c8634c1b2a648edb10_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbarelementselected")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f94affd5cf35fbdf7d96_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "avatarcontainer")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text16px", "medium", "white")}
          tag="div"
        >
          {"JA"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
