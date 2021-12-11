<script lang="ts">
    import MediaQuery from 'svelte-media-query'
    import CatApiComponent from '$lib/component/Home/CatApiComponent.svelte'
    import { getCats, getCatsMock } from '$lib/api/catApi'
    import { catsStore } from '$lib/store/CatStore';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount( async()=>{
        if($catsStore.length == 0){
            $catsStore = await getCats(10)
            //$catsStore = await getCatsMock()
            console.log($catsStore)
        }
    })

    function catLoveLoveHandler(event: CustomEvent){
        goto(`/cat/${event.detail.id}`)
    }
</script>

<article>
    <MediaQuery query="(min-width: 701px)" let:matches>
    {#if matches}
        <section class='fat'>
        {#each $catsStore as c, i}
            <CatApiComponent cat={c} on:catLoveLove={catLoveLoveHandler}/>
        {/each}
        </section>
    {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 700px)" let:matches>
        {#if matches}
            <section class='thin'>
            {#each $catsStore as c, i}
                <CatApiComponent cat={c} on:catLoveLove={catLoveLoveHandler}/>
            {/each}
            </section>
        {/if}
        </MediaQuery>
</article>



<style lang="scss">
    section{
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: 700px;
        margin: 50px auto;
        &.fat{
            height: 2000px;
        }
    }
    
</style>
