import { c as create_ssr_component, s as setContext, v as validate_component } from './index2-227e1bff.js';
import { w as writable } from './index-b77c9c77.js';

const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>MENU</div>
${``}`;
});
const css = {
  code: "html{background-color:#6b7280}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = writable();
  setContext("user", user);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    user.set({ name: "Greger" });
  }
  return `<div class="flex h-12 bg-red-500 items-center justify-between p-4"><button>Go Back</button>
	<a href="/">FABulous</a>
	${validate_component(HamburgerMenu, "HamburgerMenu").$$render($$result, {}, {}, {})}</div>
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-89b15086.js.map
