import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StacksComponent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StacksComponent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "componentcontainer", "directionvertical")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "horizontalthenvertical",
          "gap12px"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "stackcontainer")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "stackavatar")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7c448bcd26b41d98ff_image-15.png"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "alignend",
              "justifyspacebetween",
              "margin240pxleft",
              "height100"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "containerslider")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sliderstack")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "sliderunit")}
                  tag="wrapper"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "sliderunit")}
                  tag="wrapper"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "sliderunit", "active")}
                  tag="wrapper"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "sliderunit")}
                  tag="wrapper"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text40px")}
                tag="div"
              >
                {"La stack pour vos"}
                <br />
                <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
                  {"Bizdev de génie"}
                </_Builtin.Span>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "button",
                "white",
                "gap8px",
                "padding20px",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text20px")}
                tag="div"
              >
                {"Découvrir"}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "image24x24px")}
                loading="lazy"
                width="24"
                height="24"
                src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7efef5c60da90988c2_Vectors-Wrapper.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "stackproducts")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "center",
              "gap4px",
              "padding12px",
              "white",
              "round",
              "_170x170",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_13096c28-4d66-21b2-78fb-7ddc3567e89b-3567e886"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-8")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "medium", "nowrap")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "center",
              "gap4px",
              "padding12px",
              "white",
              "round",
              "_170x170",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_8822c055-7da7-201d-2f3a-418e6b888972-3567e886"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-8")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "medium", "nowrap")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "center",
              "gap4px",
              "padding12px",
              "white",
              "round",
              "_170x170",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-fbde0604-a2c1-72c8-3e13-0625d8f088fd-3567e886"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-8")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "medium", "nowrap")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "center",
              "gap4px",
              "padding12px",
              "white",
              "round",
              "_170x170",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-adba78bd-b8ff-6164-1767-3373c6954938-3567e886"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-8")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "medium", "nowrap")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
