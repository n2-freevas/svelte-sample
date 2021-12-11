<script lang="ts">
    import { onMount } from "svelte";
    
    console.log('Hello, World')
    
    // ページがブラウザに乗っかってから、実行される処理
    onMount(()=>{
        console.log('Hello, World 2!')
    })

    interface item {
        title: string
        link: string
    }
    let list: item[] = [
        {
            title:"Tutolial",
            link:"https://svelte.dev/tutorial/basics"
        },
        {
            title:"Documents",
            link:"https://kit.svelte.dev/docs"
        },
        {
            title:"Example",
            link:"https://svelte.dev/examples#hello-world"
        },
        {
            title:"Sand Box (REPL)",
            link:"https://svelte.dev/repl/hello-world?version=3.44.2"
        }
    ]
</script>

<article>
    <section id='toppage'>
        <h1>Let's learning</h1>
        <img src="https://kit.svelte.dev/images/svelte-kit-horizontal.svg" alt=''>        
    </section>
    <section id='docs'>
        {#each list as l}
        <div class='doc'>
            <h2>{l.title}</h2>
            <a href={l.link}>
                <p>{l.link}</p>
            </a>
        </div>
        {/each}
    </section>
</article>


<style lang="scss">
    article{
        max-width: 800px;
        margin:0 auto;
    }
    h1{
        color:gray;
        font-size: 30px;
    }
    #toppage{
        width:100%;
        max-width:500px;
        margin:60px auto;
        
    }
    #docs{
        max-width: 400px;
        margin:0 auto;
        .doc{
            margin:20px 0;
            a{
                color:#ff5e00;
                &:hover{
                    color:#ffd000;
                }
            }
        }
    }

   
</style>
