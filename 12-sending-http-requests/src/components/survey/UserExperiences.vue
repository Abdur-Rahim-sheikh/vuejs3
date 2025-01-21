<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      url: 'https://vue-http-demo-b6b20-default-rtdb.asia-southeast1.firebasedatabase.app/',
      // endpoint: 'survey.json',
      endpoint: 'survey',
      isLoading: true,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(`${this.url}/${this.endpoint}`)
        .then(response => response.json())
        .then(data => {
          const results = [];

          for (const key in data) {
            const result = {
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            };
            results.push(result);
          }

          this.results = results;
          this.isLoading = false;

        })
        .catch(error => {
          console.error(error);
          this.isLoading = false;
          this.error = error.message || 'Something went wrong!';
        });
      // we cannot use here as it will not wait for the fetch to complete
      // this.isLoading = false;
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="results.length > 0">
        <SurveyResult v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating">
        </SurveyResult>
      </ul>
      <p v-else-if="error" style="color: tomato;">{{ error }}</p>
      <p v-else>No experiences submitted yet!</p>

    </base-card>
  </section>
</template>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>