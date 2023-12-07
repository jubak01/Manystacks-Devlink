import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavBar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e525a423-ecfe-9624-acff-ece96ba9d534","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e525a423-ecfe-9624-acff-ece96ba9d534","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701246149057},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e525a423-ecfe-9624-acff-ece96ba9d534","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e525a423-ecfe-9624-acff-ece96ba9d534","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701246149058},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e525a423-ecfe-9624-acff-ece96ba9d538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e525a423-ecfe-9624-acff-ece96ba9d538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701246207724},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e525a423-ecfe-9624-acff-ece96ba9d538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e525a423-ecfe-9624-acff-ece96ba9d538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701246207724},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701943056100},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701943056100}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-6":{"id":"a-6","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbarelementhover","selectorGuids":["fe334607-46b2-113e-d7e6-0502dd3ce211"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701246153285},"a-7":{"id":"a-7","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbarelementhover","selectorGuids":["fe334607-46b2-113e-d7e6-0502dd3ce211"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701246231210}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavBar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

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
            data-w-id="e525a423-ecfe-9624-acff-ece96ba9d534"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f7c77ff69649417a1115_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "navbarelementhover")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "white")}
                tag="div"
              >
                {"Catalogue"}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "image12x12px")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6566f2fdc265148e9de148d7_arrow%20diag.svg"
              />
            </_Builtin.Block>
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
            data-w-id="e525a423-ecfe-9624-acff-ece96ba9d538"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "", "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6565f7c8634c1b2a648edb10_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "navbarelementhover")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "white")}
                tag="div"
              >
                {"Commandes"}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "image12x12px")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6566f2fdc265148e9de148d7_arrow%20diag.svg"
              />
            </_Builtin.Block>
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
