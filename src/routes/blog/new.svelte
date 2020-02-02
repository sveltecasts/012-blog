<script>
  import BlogView from "./[slug]/_form.svelte";
  export let post = { html: "", title: "", slug: "" };
</script>

<h1>New</h1>
<BlogView {post} isCreateMode={true} />
