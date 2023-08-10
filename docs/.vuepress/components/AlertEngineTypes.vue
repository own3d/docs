<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Platforms</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="variation in specs.variations">
        <td><code>{{ variation.type }}</code></td>
        <td>{{ variation.description }}</td>
        <td>
          <code v-for="platform in variation.platforms">
            {{ platform.type }}
          </code>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specs: [],
    }
  },

  async mounted() {
    const response = await fetch('/resources/alert-variations.json')
    this.specs = await response.json()
  },
}
</script>

<style scoped>

</style>