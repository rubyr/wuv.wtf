<script>
  import Heart from "./Heart.svelte";
  import { onMount } from "svelte";
  import HeartManager from "./heartManager";

  let trans = false;
  const letters = "transrights".split("");
  let current_letter = 0;
  let hm = new HeartManager();

  const checkKey = (e) => {
    if (e.key === letters[current_letter]) current_letter++;
    trans = current_letter >= letters.length;
  };

  const animate = () => {
    hm.update();
    hm = hm;
    window.requestAnimationFrame(animate);
  };

  onMount(() => {
    animate();
  });
</script>

<main class={trans && "trans"}>
  {#each hm.hearts as heart}
    <Heart
      x={heart.x}
      y={heart.y}
      src={heart.src}
      initialRotation={heart.initialRotation}
    />
  {/each}
  <section>
    <p>
      made with <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/2764.svg"
        alt="♥"
      />
      by <a href="https://twitter.com/woobyrubes">@woobyrubes</a>
    </p>
  </section>
</main>

<svelte:window on:keydown={checkKey} />
<svelte:head>
  <title>wuvvv</title>
</svelte:head>

<style>
  main {
    background: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    height: 100vh;
    margin: 0;
  }

  main.trans {
    background: linear-gradient(#5bcefa, #f5a9b8, white, #f5a9b8, #5bcefa);
  }

  section {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline;
    background: white;
    padding: 5px 5px;
  }

  p {
    margin: 0;
  }

  p img {
    width: 12px;
  }
</style>
