import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './index2-227e1bff.js';
import { c as cards } from './cards-b1ab406a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let katsuCards = cards.filter((card) => card.types.includes("Ninja"));
  return `<div class="flex gap-2 flex-wrap p-2">${each(katsuCards, (card) => {
    return `<a${add_attribute("href", "/single/" + card.unique_id, 0)}><div class="flex flex-col border-2 p-2 rounded-lg">
				<span>Name: ${escape(card.name)}</span>
				</div>
		</a>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-764f68e6.js.map
