import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FilterSideBar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701767498498},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701767498499},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ca667a64-8a87-4db3-046e-fafe62793ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701769646036}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".w_container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-8":{"id":"a-8","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".w_container.popuphover","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","60760b82-5952-b69c-246a-099baf5ded25"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701767502132},"a-9":{"id":"a-9","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".w_container.popuphover","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","60760b82-5952-b69c-246a-099baf5ded25"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701767530066},"a-10":{"id":"a-10","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".w_container.announce","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","7f176067-c685-5d32-9f40-b8a7783bb973"]},"xValue":-304,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":"","duration":500,"target":{"selector":".w_container.announce","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","7f176067-c685-5d32-9f40-b8a7783bb973"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701769649146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FilterSideBar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "componentcontainer", "height100")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "w_container",
          "vertical",
          "gap20px",
          "thenhorizontal"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "",
            "w_container",
            "vertical",
            "gap12px"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text20px", "unbounded")}
            tag="div"
          >
            {"Prix"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "w_container", "gap12px")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "w_container", "vertical")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text14px")}
                tag="div"
              >
                {"Min"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "textinput")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "text14px")}
                  tag="div"
                >
                  {"0"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "w_container", "vertical")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Max"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "textinput")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "text14px")}
                  tag="div"
                >
                  {"100"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "",
            "w_container",
            "vertical",
            "gap12px"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "", "text20px", "unbounded")}
            tag="div"
          >
            {"Marques"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "w_container", "vertical", "gap12px")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxselected")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image12x12px")}
                  loading="lazy"
                  width="11.99609375"
                  height="11.99609375"
                  src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6571812aa056cd1e10b204d7_Vectors-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "w_container", "gap8px", "_100")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "",
            "w_container",
            "vertical",
            "gap12px"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "", "text20px", "unbounded")}
            tag="div"
          >
            {"Poids (Kg)"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "w_container", "vertical", "gap12px")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxselected")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image12x12px")}
                  loading="lazy"
                  width="11.99609375"
                  height="11.99609375"
                  src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6571812aa056cd1e10b204d7_Vectors-Wrapper.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "w_container", "gap8px", "_100")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "w_container",
                "gap8px",
                "_100",
                "clickable"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "checkboxunselected")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text14px")}
                tag="div"
              >
                {"Choix"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}