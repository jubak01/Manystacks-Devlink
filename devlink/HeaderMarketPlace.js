import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeaderMarketPlace.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".containerhorizontal.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"}}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".containerhorizontal.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeaderMarketPlace({
  as: _Component = _Builtin.Block,
  articlesLength = "4",
  category0 = "Appareils",
  category1 = "Accessoires",
  category2 = "Imprimantes",
  route0 = "Catalogue",
  productLength = "8",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "componentcontainer",
        "directionvertical",
        "gap16px"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "justifyspacebetween")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "containerhorizontal",
            "gap12px",
            "_44pxheight"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "pageselector", "hide")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753156c3a7a4413c901c8_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text14px", "icontitle")}
              tag="div"
            >
              {"Les stacks populaires"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "pageselector")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753db4436aab32b0c2c39_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text14px", "icontitle")}
              tag="div"
            >
              {"Mes stacks"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "pageselector")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654943141812dfc0db7504c5_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text14px", "icontitle")}
              tag="div"
            >
              {"Mon catalogue"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "separatorvertical")}
            tag="wrapper"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "", "pageselector")}
            data-w-id="3b68bb29-962e-3abc-f713-ba731776ced1"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text14px")}
              tag="div"
            >
              {category0}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "pageselector")}
            data-w-id="3b68bb29-962e-3abc-f713-ba731776ced4"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text14px")}
              tag="div"
            >
              {category1}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "", "pageselector")}
            data-w-id="3b68bb29-962e-3abc-f713-ba731776ced7"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "", "text14px")}
              tag="div"
            >
              {category2}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "containerhorizontal",
            "gap12px",
            "justifyright",
            "margin12pxleft"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "buttoncircle")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image20x20px")}
              data-w-id="3b68bb29-962e-3abc-f713-ba731776cedc"
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753ddce41bf0bcdd2e0ce_magnifying-glass.svg"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text14px",
                "grey300",
                "light",
                "hide"
              )}
              tag="div"
            >
              {"Rechercher"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "buttoncircle")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "", "image20x20px")}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/654753ddbd62af1c2923621b_Vectors-Wrapper.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "indicatornumber")}
              tag="div"
            >
              {articlesLength}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "justifyspacebetween")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "text14px")} tag="div">
          {route0}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text14px", "grey400")}
            tag="div"
          >
            {productLength}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text14px", "grey400")}
            tag="div"
          >
            {" produits"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
