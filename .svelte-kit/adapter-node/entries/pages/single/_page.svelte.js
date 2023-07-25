import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>single card</h1>

<ul>${each(data.summaries, ({ uniqueId }) => {
    return `<li><a href="${"/single/" + escape(uniqueId, true)}">${escape(uniqueId)}</a></li>`;
  })}</ul>`;
});
export {
  Page as default
};
