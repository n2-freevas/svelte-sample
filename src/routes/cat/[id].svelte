<script lang='ts'>
    import { catsStore } from '$lib/store/CatStore';
    import { onMount } from 'svelte';
    import type { CatModel } from '$lib/model/Cat'
    import { page } from '$app/stores';
import { goto } from '$app/navigation';
    
    let cat: CatModel
    
    onMount(async()=>{
        console.log($page)
        cat = $catsStore.filter(c => c.id == $page.params.id).pop()
        console.log(cat)
    })

</script>

<article>
    <div id='back' on:click={()=>{goto('/cat')}}>
        <i class="fas fa-arrow-circle-left"></i>
        <p>BACK</p>
    </div>
    {#if cat}
    <section>
        <img src={cat.url.toString()} alt="cat">
        <h1>{cat.id}</h1>
        <p>{cat.height} * {cat.width}</p>
    </section>
    {/if}
    
</article>

<style lang="scss">
    #back{
        font-size:16px;
        display: flex;
        align-items: center;
        i{
            font-size:50px;
            margin:0 10px;
        }
    }
    article{
        position: relative;
        margin:0 auto;
        width:100%;
        max-width: 700px;
        section{
            width:90%;
            max-width: 600px;
            margin:30px auto;
            img{
                width:100%;
            }
        }
    }
</style>
