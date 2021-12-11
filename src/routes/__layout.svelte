<script lang="ts">
    import MediaQuery from 'svelte-media-query'
    import ToastArea from '$lib/component/toast/ToastArea.svelte'
    import HambergerMenuBox from '$lib/component/HambergerMenuBox.svelte'
    import HeaderMenuBox from '$lib/component/HeaderMenuBox.svelte'
    import { mainmenus } from '$lib/store/MainMenu'
    import { goto } from '$app/navigation'

    let scrollY
    let preScrollY
    let isHideHeader = false
    let sliderOpen = false
    function scrollEvent(){
        if(preScrollY < scrollY){
            isHideHeader = true
            
        } else {
            isHideHeader = false
        }
        sliderOpen = false
        preScrollY = scrollY
    }

</script>

<svelte:window on:scroll={scrollEvent} bind:scrollY={scrollY}/>
<!-- PC用のレイアウト (横幅 700px - ∞)-->
<MediaQuery query="(min-width: 701px)" let:matches>
        {#if matches}
        <article id='pc-main'>
        <header class='{isHideHeader ? 'hide':''}'>
            <div class='logo' on:click={()=>goto('/')}>
                <img src='/img/logo.svg' alt='LOGO'>
            </div>
            <div class='menu-row-list'>
                {#each $mainmenus as menu}
                    <HeaderMenuBox name={menu.name} path={menu.path} explain={menu.explain}></HeaderMenuBox>
                {/each}
            </div>
        </header>
        <section id='body'>
            <slot></slot>
        </section>
    </article>
    {/if}
</MediaQuery>
<!-- スマホ用のレイアウト(横幅 0px - 700px) -->
<MediaQuery query="(max-width: 700px)" let:matches>
{#if matches}
<article id='phone-main'>
    <header class='{isHideHeader ? 'hide':''}'>
        <div class='logo'>
            <img src='/img/logo.svg' alt='LOGO'>
        </div>
        <div class='hamburger-menu' on:click={()=>{sliderOpen ? sliderOpen=false : sliderOpen=true}}>
            <span class='hamburger-button {sliderOpen?'open':''}'>
                <span class='bar bar1'></span>
                <span class='bar bar2'></span>
                <span class='bar bar3'></span>
            </span>
            <div class='hamburger-slider {sliderOpen ? "open": ""}'>
                {#each $mainmenus as menu}
                    <HambergerMenuBox name={menu.name} path={menu.path} explain={menu.explain}></HambergerMenuBox>
                {/each}
            </div>
        </div>
    </header>
    <section id='body'>
        <slot></slot>
    </section>
</article>
{/if}
</MediaQuery>

<ToastArea></ToastArea>

<style lang="scss">
    #pc-main, #phone-main{
        padding:15px;
    }
    header{
        position: fixed;
        width:95%;
        top:15px;
        left:50%;
        max-width: 800px;
        transform: translate(-50%, 0);
        background: white;
        display: flex;
        box-shadow: 0px 1px 3px gray;
        justify-content: space-between;
        align-items: center;
        height:65px;
        padding:0 20px;
        transition: 1s;
        &.hide{
            top:-100px;
        }
        .logo{
            cursor: pointer;
            img{
                height:45px;
            }
        }
        .menu-row-list{
            margin:0 20px;
        }
        
        .hamburger-menu{
            position: relative;
            padding:10px;
            .hamburger-button{
                .bar{
                    display: block;
                    background-color: #000;
                    height: 4px;
                    width: 30px;
                    border-radius: 1px;
                    transition: transform .3s;
                }
                .bar1{transform: translateY(-6px);}
                // .bar2{}
                .bar3{transform: translateY(6px);}
                &.open{
                    .bar1{transform: translateY(4px) rotate(45deg);}
                    .bar2{opacity: 0;}
                    .bar3{transform: translateY(-4px) rotate(-45deg);}
                }
            }
            .hamburger-slider{
                position: absolute;
                width:300px;
                top:100px;
                right:-350px;
                background: white;
                box-shadow: -3px 3px 10px gray;
                transition: 0.3s;
                &.open{
                    right:-50px
                }
            }
        }
    }
    #body{
        margin-top: 100px;
    }

</style>
