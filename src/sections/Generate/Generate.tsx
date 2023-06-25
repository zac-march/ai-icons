import { FC, useEffect, useState } from "react";
import style from "./Generate.module.css";
import { useForm } from "react-hook-form";
import fetchIcons from "../../api/fetchIcons";
import Form from "../../components/Form/Form";
import uniqid from "uniqid";
import IconGrid from "../../components/IconGrid/IconGrid";
import { addStoredIcons } from "../../util/storedIcons";

interface Icons {
  timeCreated: number;
  url: string;
}

const Generate: FC = () => {
  const [iconsToLoad, setIconsToLoad] = useState<number>();
  const [generatedIcons, setGeneratedIcons] = useState<Icons[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const form = useForm();
  const { register } = form;

  const handleGenerate = async (e: any) => {
    e.preventDefault();
    const count = form.getValues().variants;
    setIconsToLoad(count);
    setIsFetching(true);
    setGeneratedIcons([]);

    try {
      const icons: Icons[] = await fetchIcons(form.getValues());
      setGeneratedIcons(icons);
      addStoredIcons(icons);
    } catch (error) {
      console.error("Error generating icons:", error);
    }
    setIsFetching(false);
  };

  return (
    <section className={style.container}>
      <Form
        register={register}
        handleGenerate={handleGenerate}
        isLoading={isFetching}
      />
      {<IconGrid icons={generatedIcons} count={iconsToLoad} />}
    </section>
  );
};

export default Generate;
