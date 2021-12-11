<script lang='ts'>
    import type {CatModel} from '$lib/model/Cat'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let cat: CatModel

    function onClickHandler(){
        dispatch('catLoveLove',{
            id: cat.id
        })
    }
    
</script>

<article on:click={onClickHandler}>
    <section class='components-box'>
        <img src={cat.url.toString()} alt=''>
        <div class='text-box'>
            <p>id   : {cat.id}</p>
            <p>size : {`${cat.height} * ${cat.width}`}</p>
        </div>
    </section>
</article>

<style lang="scss">
    article{
        max-width: 300px;
        margin: 15px;
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.25);
    }
    section{
        display: flex;
        align-items: center;
    }
    img{
        width:200px;
    }
    .components-box{
        flex-direction: column;
        justify-content: center;
    }
    .text-box{
        width:150px;
        margin: 15px 0;
        p{font-size: 13px;
        margin: 5px 0;}
    }
    
</style>
