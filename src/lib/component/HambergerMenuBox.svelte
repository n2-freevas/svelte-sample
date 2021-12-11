<script lang="ts">
    export let name :string
    export let path :string
    export let explain: string
</script>
<a href={path}>
    <div class='menu-box'>
        <div class='text'>
            <p class='name'>{name}</p>
            <p class='explain'>{@html explain}</p>
        </div>
        
    </div>
</a>
<style lang="scss">
    .menu-box{
        padding:15px 30px;
        display: flex;
        height:100px;
        flex-direction: row;
        .text{
            padding:0 5px;
            width:230px;
            color:black;
            .name{ 
                font-size:20px;
                margin:0 0 5px 0;
            }
            .explain{
                font-size: 12px;
                margin:0 10px;
            }
        }
        
    }
</style>
