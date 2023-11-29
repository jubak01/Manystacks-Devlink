import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GridProducts.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GridProducts({
  as: _Component = _Builtin.Block,
  title = "Nos équipements populaires",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "componentcontainer", "directionvertical")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "vertical", "gap16px")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text20px", "unbounded")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "gridproducts")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec7fe-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec80f-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium", "nowrap")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec820-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec831-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec842-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "container",
              "vertical",
              "gap16px",
              "white",
              "round",
              "padding20px",
              "aligncenter",
              "clickable"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2996cc29-4451-7171-69e1-d35d642ec853-642ec7f9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text14px",
                  "medium",
                  "purple",
                  "tag"
                )}
                tag="div"
              >
                {"Top produits"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "medium")}
                tag="div"
              >
                {"Macbook Air 13’’ (2020)"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                {"Retina - Apple M1 - SSD 256 Go"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "container",
                "vertical",
                "alignleft",
                "_100",
                "gap4px"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px", "grey400")}
                tag="div"
              >
                {"à partir de"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text16px", "nowrap")}
                tag="div"
              >
                <_Builtin.Span className={_utils.cx(_styles, "text-span-2")}>
                  {"74,90 €"}
                </_Builtin.Span>
                {"/mois"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
