<script lang="ts">
    export let name :string
    export let path :string
</script>

<div class='menu-box'>
    <div class='menu-name' >
        <a href={path}><p>{name}</p></a>
    </div>
</div>

<style lang="scss">
    .menu-box{
        position: relative;
        display: inline-block;
        .menu-name{
            border-radius: 20px;
            padding:5px 20px;
            &:hover{
                background: white;
                p{color:black}
            }
            p{
                color:black;
            }
        }
    }
</style>
