<script>
  export let src;
  export let x;
  export let y;
  export let initialRotation;
  $: style = `transform: translate(${x}px, ${y}px) rotate(${initialRotation + y}deg);`;
</script>

<img {src} alt="heart" style={style} />

<style>
  img {
    width: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
