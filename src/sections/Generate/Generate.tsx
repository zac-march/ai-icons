import React, { FC, useEffect, useState } from "react";
import style from "./Generate.module.css";
import { useForm } from "react-hook-form";
import getIcons from "../../api/getIcons";
import GenerateForm from "../../components/GenerateForm/GenerateForm";
import uniqid from "uniqid";

interface Icons {
  timeCreated: number;
  url: string;
}

const placeholderIcon = (
  <div className={`${style.icon} ${style.skele}`} key={uniqid()}></div>
);

const Generate: FC = () => {
  const [generatedIcons, setGeneratedIcons] = useState<Icons[]>([]);
  const [placeholderIcons, setSkeleIcons] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm();
  const { register } = form;

  useEffect(() => {
    if (!isLoading) setSkeleIcons([]);
  }, [isLoading]);

  const handleGenerate = async (e: any) => {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);
    setSkeleIcons([placeholderIcon]);
    setGeneratedIcons([]);

    try {
      const icons: Icons[] = await getIcons(form.getValues());
      setGeneratedIcons(icons);
    } catch (error) {
      console.error("Error generating icons:", error);
      setIsLoading(false);
    }
  };

  function endIconLoad() {
    setIsLoading(false);
    // alert("image rendered");
  }

  function startIconLoad() {
    //Rendering start
    requestAnimationFrame(endIconLoad);
  }

  function iconLoad() {
    requestAnimationFrame(startIconLoad);
  }

  return (
    <section className={style.container}>
      <GenerateForm
        register={register}
        handleGenerate={handleGenerate}
        isLoading={isLoading}
      />
      <div className={style.icons}>
        {isLoading && placeholderIcons.map((skele) => skele)}
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
