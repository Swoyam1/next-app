import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafted award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ea ullam odio hic perspiciatis possimus, aut accusamus
            necessitatibus, error praesentium delectus enim atque aliquam!
            Facilis, blanditiis sapiente! Blanditiis rem sed placeat nam, fugiat
            similique suscipit neque ad odio adipisci, ab, deserunt repudiandae
            laborum.
            <br />
            <br />
            Voluptate dolorum eum, ipsa voluptatum explicabo ex dolorem a,
            cupiditate, natus odit architecto molestias delectus illum. Nemo
            tenetur quae, doloribus dolorem error reiciendis ipsam minus ullam
            officiis soluta, nulla, repudiandae molestiae. Repudiandae.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ab. Eius quidem veritatis earum qui quam non quos culpa beatae
            eveniet laborum architecto facilis ipsum, ex dicta consequatur
            <br />- soluta maxime quia molestias optio.
            <br /> -Quasi incidunt vel possimus optio nemo officia.
          </p>
          <Button url="/contact" text="Compact" />
        </div>
      </div>
    </div>
  );
};

export default About;
