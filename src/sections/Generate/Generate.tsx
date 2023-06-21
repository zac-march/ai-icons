import React, { FC, useEffect, useState } from "react";
import style from "./Generate.module.css";
import { useForm } from "react-hook-form";
import getIcons from "../../api/getIcons";
import GenerateForm from "../../components/GenerateForm/GenerateForm";
import uniqid from "uniqid";
import { JsxElement } from "typescript";

interface Icons {
  timeCreated: number;
  url: string;
}

const Generate: FC = () => {
  const [iconsToLoad, setIconsToLoad] = useState<number>(0);
  const [generatedIcons, setGeneratedIcons] = useState<Icons[]>([]);
  const [skeletonIcons, setSkeletonIcons] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm();
  const { register } = form;

  useEffect(() => {
    if (!isLoading) {
      setSkeletonIcons([]);
    }
  }, [isLoading]);

  const handleGenerate = async (e: any) => {
    e.preventDefault();
    const count = form.getValues().variants;
    setIconsToLoad(count);
    setIsLoading(true);
    getSkeletonIcons(count);
    setGeneratedIcons([]);

    try {
      const icons: Icons[] = await getIcons(form.getValues());
      setGeneratedIcons(icons);
    } catch (error) {
      console.error("Error generating icons:", error);
      setIsLoading(false);
    }
  };

  function getSkeletonIcons(count: number) {
    let tempArray: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      tempArray.push(
        <div className={`${style.icon} ${style.skeleton}`} key={uniqid()}></div>
      );
    }
    console.log(tempArray);
    setSkeletonIcons(tempArray);
  }

  function iconLoad() {
    requestAnimationFrame(startIconLoad);

    function startIconLoad() {
      requestAnimationFrame(endIconLoad);
    }

    function endIconLoad() {
      console.log("icon loaded", iconsToLoad);
      if (iconsToLoad <= 1) {
        setIsLoading(false);
      } else {
        setIconsToLoad((prev) => prev - 1);
      }
    }
  }

  return (
    <section className={style.container}>
      <GenerateForm
        register={register}
        handleGenerate={handleGenerate}
        isLoading={isLoading}
      />
      <div className={style.icons}>
        {isLoading && skeletonIcons.map((skele) => skele)}
        {generatedIcons.map((icon, index) => (
          <div className={style.icon} key={index}>
            <img
              src={icon.url}
              alt={`Icon ${index}`}
              onLoad={iconLoad}
              style={{ visibility: isLoading ? "hidden" : "visible" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Generate;
