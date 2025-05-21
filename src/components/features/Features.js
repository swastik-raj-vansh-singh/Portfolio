import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/Data";
import FadeInWhenVisible from "../FadeInWhenVisible";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <FadeInWhenVisible>
      <Title title="" des="What I Do" />
      </FadeInWhenVisible>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <FadeInWhenVisible key={item.id}>
            <Card item={item} />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default Features;