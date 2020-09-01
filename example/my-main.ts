import mySection from "./my-section.ts";

import posts from "./posts.ts";

export default {
  components: { mySection },
  data: {
    posts,
  },
  template: `
    <main>
      <h2>Very Smart Main Component</h2>
      <my-section
          v-for="{ title, htmlText } in posts"
          :key="title"
          :title="title"
          :html-text="htmlText" />
    </main>
    `,
};
