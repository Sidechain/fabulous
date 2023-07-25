<script lang="ts">
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@supabase/auth-ui-svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Auth
	supabaseClient={data.supabase}
	view="magic_link"
	redirectTo={`${data.url}/auth/callback`}
	showLinks={false}
	appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
	additionalData={{}}
/>
