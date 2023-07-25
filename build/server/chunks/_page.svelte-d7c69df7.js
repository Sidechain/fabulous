import { c as create_ssr_component, d as each, e as escape } from './index2-227e1bff.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>single card</h1>

<ul>${each(data.summaries, ({ uniqueId }) => {
    return `<li><a href="${"/single/" + escape(uniqueId, true)}">${escape(uniqueId)}</a></li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d7c69df7.js.map
