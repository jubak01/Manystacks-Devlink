import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GridProductsSmall.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701767498498},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701767498499},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701769646036},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701943056100},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3d76828e-8dfe-284d-74e0-e603e6b42e4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701943056100},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702394873751},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702394873751},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6579556a877ace3bb3b47d49|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702450537397},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6579556a877ace3bb3b47d49|abe6ad51-041d-a91b-3e7d-3becacaf1702","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1702450537397}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-8":{"id":"a-8","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".w_container.popuphover","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","60760b82-5952-b69c-246a-099baf5ded25"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701767502132},"a-9":{"id":"a-9","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".w_container.popuphover","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","60760b82-5952-b69c-246a-099baf5ded25"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701767530066},"a-10":{"id":"a-10","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".w_container.announce","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","7f176067-c685-5d32-9f40-b8a7783bb973"]},"xValue":-304,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":"","duration":500,"target":{"selector":".w_container.announce","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","7f176067-c685-5d32-9f40-b8a7783bb973"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701769649146},"a-11":{"id":"a-11","title":"New Timed Animation 3","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-11-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-11-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fa"},"value":"none"}},{"id":"a-11-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fc"},"value":"none"}},{"id":"a-11-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fe"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-12":{"id":"a-12","title":"New Timed Animation 4","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-12-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-12-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-12-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fa"},"value":"flex"}},{"id":"a-12-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fc"},"value":"flex"}},{"id":"a-12-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65787bf1c9fe4227bb43359d|abe6ad51-041d-a91b-3e7d-3becacaf16fe"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GridProductsSmall({
  as: _Component = _Builtin.Block,
  title = "Ça pourrait bien vous intéresser",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "componentcontainer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "w_container", "vertical", "gap16px")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text20px", "unbounded")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "gridproducts", "small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "w_container",
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
              "w-node-_50778a23-b872-ea51-b101-94091e469243-1e46923e"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
            <_Builtin.Block
              className={_utils.cx(_styles, "productimagecontainer")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
                "w_container",
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
              "w_container",
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
              "w-node-_50778a23-b872-ea51-b101-94091e469254-1e46923e"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
              className={_utils.cx(_styles, "image100", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
                "w_container",
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
              "w_container",
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
              "w-node-_50778a23-b872-ea51-b101-94091e469265-1e46923e"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
              className={_utils.cx(_styles, "image100", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
                "w_container",
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
              "w_container",
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
              "w-node-_50778a23-b872-ea51-b101-94091e469276-1e46923e"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
              className={_utils.cx(_styles, "image100", "_80")}
              loading="lazy"
              width="134"
              height="117.17241668701172"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65531b7f30cbff3ff0dd9293_image-1.png"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
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
                "w_container",
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
