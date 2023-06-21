import { FieldValues } from "react-hook-form";

async function fetchIcons(values: FieldValues) {
  const url = buildUrl(values);

  const settings = {
    method: "POST",
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    const icons = data.data.map((gen: any) => {
      return { created: data.created, url: gen.url };
    });
    console.log(icons);
    return icons;
  } catch (e) {
    return e;
  }

  function buildUrl(values: FieldValues) {
    const { description, color, design, variants } = values;
    const url = `https://ks5rs6reek.execute-api.us-west-2.amazonaws.com/default/openai-dalle-icons?description=${description}&color=${color}&design=${design}&variants=${variants}`;
    return url;
  }
}
export default fetchIcons;
