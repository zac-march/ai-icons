import React, { FC, useState } from "react";
import style from "./Generate.module.css";
import { useForm } from "react-hook-form";

interface TypeProps {}

const Generate: FC<TypeProps> = (props) => {
  const form = useForm();
  const { register } = form;

  const colorOptions = ["red", "blue", "yellow", "green", "orange", "purple"];
  const designs = ["pixelated", "cartoonish", "minimalistic"];

  const handleGenerate = (e: any) => {
    e.preventDefault();
    console.log(form.getValues());
  };

  return (
    <section className={style.container}>
      <form>
        <div className={style.formControl}>
          <label className={style.label} htmlFor="description">
            1. Describe your icon
          </label>
          <input
            className={style.textInput}
            type="text"
            id="description"
            placeholder="a silly goose"
            {...register("description")}
            required
          ></input>
        </div>
        <div className={style.formControl}>
          <label className={style.label}>2. Select an accent colour</label>
          <div className={style.colors}>
            {colorOptions.map((color) => (
              <div className={style.color}>
                <label className="sr-only" htmlFor={"color-" + color}></label>
                <input
                  value={color}
                  style={{ backgroundColor: `${color}` }}
                  className={style.radioInput}
                  type="radio"
                  id={"colour-" + color}
                  {...register("color")}
                  required
                ></input>
              </div>
            ))}
          </div>
        </div>
        <div className={style.formControl}>
          <label>3. Choose a design type</label>
          <div className={style.designs}>
            {designs.map((design) => (
              <div className={style.design}>
                <label className="sr-only" htmlFor={"color-" + design}>
                  {design}
                </label>
                <input
                  value={design}
                  style={{ backgroundColor: `red` }}
                  className={style.radioInput}
                  type="radio"
                  id={"design-" + design}
                  {...register("design")}
                  required
                ></input>
              </div>
            ))}
          </div>
        </div>
        <div className={style.formControl}>
          <label htmlFor="variants">4. Number of variants</label>
          <div className={style.variants}>
            <input
              className={style.textInput}
              max="10"
              type="number"
              id="variants"
              placeholder="3"
              {...register("variants")}
              required
            ></input>
          </div>
        </div>
        <div className={style.formControl}>
          <button onClick={(e) => handleGenerate(e)}>Generate</button>
        </div>
      </form>
    </section>
  );
};

export default Generate;
