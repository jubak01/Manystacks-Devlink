import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./MenuBurgerContainer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cedc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699177095088},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3b68bb29-962e-3abc-f713-ba731776cec4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b68bb29-962e-3abc-f713-ba731776cec4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700738822672},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5f60c79b-cbf3-0831-8cf0-6a6c09d5901d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5f60c79b-cbf3-0831-8cf0-6a6c09d5901d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701185186735}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"block"}},{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"none"}},{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"none"}},{"id":"a-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-2":{"id":"a-2","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".container.gap12px.justifyright.margin12pxleft","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dff","4f17d2d8-5161-9c8e-61fd-974dee722592","31543689-5d77-7387-f9ac-d79885173eb6","ec8d696c-db53-78a0-0cfd-414a2a443636"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".buttoncircle","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfb"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text14px.grey300.light.hide","selectorGuids":["6fdcd14e-1c56-ccaf-825d-dd54bc139dfa","efbf567d-eda9-0547-2be1-1eb1777a1fd6","6aedcd3f-9c78-b058-89c6-4abe93e09bf9","0211c2ca-769b-f04f-2fb0-75de0a956653"]},"value":"none"}},{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced1"},"value":"flex"}},{"id":"a-2-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced4"},"value":"flex"}},{"id":"a-2-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"3b68bb29-962e-3abc-f713-ba731776ced7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699174480034},"a-3":{"id":"a-3","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuburgercontainer","selectorGuids":["7f638da5-2124-d82c-1c3f-ba3762db2437"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1700738830508},"a-5":{"id":"a-5","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".menuburgercontainer","selectorGuids":["7f638da5-2124-d82c-1c3f-ba3762db2437"]},"xValue":-100,"yValue":null,"xUnit":"%","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701185191224}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MenuBurgerContainer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "menuburgercontainer")}
      id={_utils.cx(
        _styles,
        "w-node-_5f60c79b-cbf3-0831-8cf0-6a6c09d5901b-09d5901b"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "alignright")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image28x28px", "clickable")}
          data-w-id="5f60c79b-cbf3-0831-8cf0-6a6c09d5901d"
          loading="lazy"
          width="30"
          height="30"
          src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/6566010d4acd6bf0221f3980_icon.svg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text14px", "medium")}
        tag="div"
      >
        {"Interfaces"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image20x20px")}
          loading="lazy"
          width="20"
          height="20"
          src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/656603dbe11bf865ead9de43_shopping-bag.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Le catalogue"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image20x20px")}
          loading="lazy"
          width="20"
          height="20"
          src="https://uploads-ssl.webflow.com/65474f5b3ac46dc4b33db7b7/65660461278a251b44574f5a_package.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Mes commandes"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "separatorhorizontal")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "text14px", "medium")}
        tag="div"
      >
        {"Favoris"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
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
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Mes stacks"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
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
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Mon catalogue"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "separatorhorizontal")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "text14px", "medium")}
        tag="div"
      >
        {"Catégories"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Appareils"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Accessoires"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "pageselector", "showalways")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text14px", "icontitle", "showalways")}
          tag="div"
        >
          {"Imprimantes"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
