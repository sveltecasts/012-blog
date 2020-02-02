<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`https://sapper-blog-8c057.firebaseio.com/.json`)
      .then(r => r.json())
      .then(slugWithPostObject => {
        // blog.json: [{post},{post}...]
        // Firebase: ["slug": {post}, "slug": {post}]
        let posts = Object.keys(slugWithPostObject) // ["slug1","slug2"...]
          .map(slug => slugWithPostObject[slug]);

        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
