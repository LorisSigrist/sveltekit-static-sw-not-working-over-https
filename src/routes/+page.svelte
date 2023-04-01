<script lang="ts">
    let request_status = 'not requested';

    function make_request() {
        request_status = 'pending';
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(()=>request_status = 'fulfilled')
            .catch(()=>request_status = 'failed');
        
    }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={make_request}>Make request</button>
<p>Request status: {request_status}</p>