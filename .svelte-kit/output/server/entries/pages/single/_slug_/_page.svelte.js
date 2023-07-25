import { c as create_ssr_component, b as escape, e as each, v as validate_component, g as getContext, d as subscribe, a as add_attribute } from "../../../../chunks/index2.js";
import { b as getSingleCardName } from "../../../../chunks/helpers.js";
const StatsSquare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stat } = $$props;
  let { label } = $$props;
  if ($$props.stat === void 0 && $$bindings.stat && stat !== void 0)
    $$bindings.stat(stat);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<div><div class="w-16 h-16 bg-gray-600 rounded-lg flex justify-center items-center relative"><span class="text-2xl">${escape(stat === "" ? "N/A" : stat)}</span>
		<span class="absolute bottom-0 text-xs">${escape(label)}</span></div></div>`;
});
const TypeTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="flex w-auto h-auto p-2 bg-gray-600 rounded-lg"><span>${escape(type)}</span></div>`;
});
const TypeTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { types } = $$props;
  if ($$props.types === void 0 && $$bindings.types && types !== void 0)
    $$bindings.types(types);
  return `<div class="flex gap-2 justify-center">${each(types, (type) => {
    return `${validate_component(TypeTag, "TypeTag").$$render($$result, { type }, {}, {})}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let { data } = $$props;
  const user = getContext("user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `<div class="flex flex-col items-center p-4"><div>Hello ${escape($user.name)}</div>
	
	${data != void 0 ? `<div class="flex flex-col gap-2"><img loading="eager" class="w-max"${add_attribute("src", data.printings[0]?.image_url ?? "https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg", 0)}${add_attribute("alt", `Image of the card ${data.name}`, 0)}>
			<span class="text-xl text-center">${escape(data.name)}</span>

			${validate_component(TypeTags, "TypeTags").$$render($$result, { types: data.types }, {}, {})}

			${validate_component(TypeTags, "TypeTags").$$render($$result, { types: data.card_keywords }, {}, {})}

			${data.abilities_and_effects && data.abilities_and_effects.length > 0 ? `${validate_component(TypeTags, "TypeTags").$$render($$result, { types: data.abilities_and_effects }, {}, {})}` : ``}

			${data.ability_and_effect_keywords && data.ability_and_effect_keywords.length > 0 ? `${validate_component(TypeTags, "TypeTags").$$render($$result, { types: data.ability_and_effect_keywords }, {}, {})}` : ``}

			${!data.types?.includes("Hero") ? `<div class="flex gap-2 justify-center">${validate_component(StatsSquare, "StatsSquare").$$render($$result, { stat: data.pitch, label: "Pitch" }, {}, {})}
					${validate_component(StatsSquare, "StatsSquare").$$render($$result, { stat: data.cost, label: "Cost" }, {}, {})}
					${validate_component(StatsSquare, "StatsSquare").$$render($$result, { stat: data.power, label: "Power" }, {}, {})}
					${validate_component(StatsSquare, "StatsSquare").$$render($$result, { stat: data.defense, label: "Defense" }, {}, {})}</div>` : ``}

			${data.types?.includes("Hero") ? `<div class="flex gap-2 justify-center">${validate_component(StatsSquare, "StatsSquare").$$render(
    $$result,
    {
      stat: data.intelligence,
      label: "Intellect"
    },
    {},
    {}
  )}
					${validate_component(StatsSquare, "StatsSquare").$$render($$result, { stat: data.health, label: "Health" }, {}, {})}</div>` : ``}

			<div class="flex justify-around">${data.referenced_cards ? `<div class="flex flex-col"><span>Referenced cards</span>
						${each(data.referenced_cards, (refCard) => {
    return `<a${add_attribute("href", "/single/" + refCard, 0)}>${escape(getSingleCardName(refCard))}</a>`;
  })}</div>` : ``}

				${data.cards_referenced_by ? `<div class="flex flex-col"><span>Referenced by</span>
						${each(data.cards_referenced_by, (refCard) => {
    return `<a${add_attribute("href", "/single/" + refCard, 0)}>${escape(getSingleCardName(refCard))}</a>`;
  })}</div>` : ``}</div></div>` : ``}</div>`;
});
export {
  Page as default
};
