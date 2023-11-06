import React from "react";
import styles from "./HeaderMarketPlace.module.css";

function HeaderMarketPlace({
  productLength = "0",
  category0 = "Appareils",
  category1 = "Accessoires",
  category2 = "Imprimantes",
}) {
  return (
    <div className={styles["frame-101"]}>
      <div className={styles["frame-8"]}>
        <div className={styles["frame-68"]}>
          <div className={styles["pages_selector-stay"]}>
            <img
              className={styles["vectors-wrapper"]}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/653f7a24c94fb3a1df2b9ba6/6541156bd470d34e382a3d59_Vectors-Wrapper.svg"
            />
            <div className={styles["text icontitle"]}>
              {"Les stacks populaires"}
            </div>
          </div>
          <div className={styles["pages_selector"]}>
            <img
              className={styles["vectors-wrapper"]}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/653f7a24c94fb3a1df2b9ba6/6541156bd470d34e382a3d59_Vectors-Wrapper.svg"
            />
            <div className={styles["text icontitle"]}>
              {"Les stacks populaires"}
            </div>
          </div>
          <div className={styles["pages_selector"]}>
            <img
              className={styles["vectors-wrapper"]}
              loading="lazy"
              width="20"
              height="20"
              src="https://uploads-ssl.webflow.com/653f7a24c94fb3a1df2b9ba6/6541156b3408d28bfc9895e4_Vectors-Wrapper.svg"
            />
            <div className={styles["text icontitle"]}>
              {"Mes stacks & favoris"}
            </div>
          </div>
          <div className={styles["vectors-wrapper-2"]} />
          <div className={styles["pages_selector"]}>
            <div className={styles["text"]}>
              {category0}
            </div>
          </div>
          <div className={styles["pages_selector"]}>
            <div className={styles["text"]}>
              {category1}
            </div>
          </div>
          <div className={styles["pages_selector"]}>
            <div className={styles["text"]}>
              {category2}
            </div>
          </div>
        </div>
        <div className={styles["frame-33"]}>
          {/* ... rest of the code ... */}
        </div>
      </div>
      <div className={styles["frame-102"]}>
        <div className={styles["text-401"]}>
          {"Catalogue"}
        </div>
        <div className={styles["div-block"]}>
          <div className={styles["text-402"]}>
            {productLength}
          </div>
          <div className={styles["text-402"]}>
            {" produits"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMarketPlace;
