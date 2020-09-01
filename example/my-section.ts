export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    htmlText: {
      type: String,
      required: true,
    },
  },
  template: `
        <section>
            <h3>{{ title }}</h3>
            <p v-html="htmlText" />
        </section>
    `,
};
