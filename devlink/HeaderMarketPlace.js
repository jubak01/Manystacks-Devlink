import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeaderMarketPlace.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".frame-33","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139df6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".pages_selector-2","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-block","selectorGuids":["3ac7926a-c542-839c-708d-288edd029358"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mappedcategory","selectorGuids":["46b70ed8-bba9-ac0b-41b2-0fc24a8c6110"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".frame-33","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139df6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".pages_selector-2","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mappedcategory","selectorGuids":["46b70ed8-bba9-ac0b-41b2-0fc24a8c6110"]},"value":"flex"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-block","selectorGuids":["3ac7926a-c542-839c-708d-288edd029358"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeaderMarketPlace({
  as: _Component = _Builtin.Block,
  articlesLength = "4",
  category0 = "Appareils",
  category1 = "Accessoires",
  category2 = "Imprimantes",
  route0 = "Catalogue",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "frame-101")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "frame-8")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "frame-68")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "pages_selector", "stay")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-3")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753156c3a7a4413c901c8_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text", "icontitle")}
              tag="div"
            >
              {"Les stacks populaires"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "pages_selector")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-5")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753db4436aab32b0c2c39_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text", "icontitle")}
              tag="div"
            >
              {"Mes stacks"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "pages_selector")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "vectors-wrapper-5")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654943141812dfc0db7504c5_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text", "icontitle")}
              tag="div"
            >
              {"Mon catalogue"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "vectors-wrapper-2")}
            tag="wrapper"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "mappedcategory")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pages_selector")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text")}
                tag="div"
              >
                {category0}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pages_selector")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text")}
                tag="div"
              >
                {category1}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "", "pages_selector")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text")}
                tag="div"
              >
                {category2}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "frame-33")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "pages_selector-2")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "heroicons-solid-magnifying-glass-4"
              )}
              data-w-id="3b68bb29-962e-3abc-f713-ba731776cedc"
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753ddce41bf0bcdd2e0ce_magnifying-glass.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block")}
              tag="div"
            >
              {"Rechercher"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "pages_selector-2")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "", "vectors-wrapper-6")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753ddbd62af1c2923621b_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-2")}
              tag="div"
            >
              {articlesLength}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "frame-102")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "text-401")} tag="div">
          {route0}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "text-402")} tag="div">
            {"0"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "text-402")} tag="div">
            {" produits"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
