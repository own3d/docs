<template>
  <div>
    <div v-for="variation in specs.variations">
      <div v-for="platform in variation.platforms">
        <h3 :id="`#${platform.type}-${variation.type}-parameters`">
          <a :href="`#${platform.type}-${variation.type}-parameters`" class="header-anchor">#</a>
          {{ formatPlatform(platform.type) }} {{ variation.name }} Alert Parameters
          <span data-v-217a43d9="" class="ae-badge" style="vertical-align: top;">AE{{ specs.version }}</span>
        </h3>

        <p>Type: <code>{{ variation.type }}</code>, Platform: <code>{{ platform.type }}</code></p>

        <div v-if="platform.parameters.length">
          <p>The following parameters are available for this alert variation:</p>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody style="width: 100%;">
            <tr v-for="parameter in platform.parameters">
              <td><code>{{ parameter.name }}</code></td>
              <td><code>{{ parameter.type }}</code></td>
              <td><code>{{ parameter.example }}</code></td>
              <td style="width: 100%">
                {{ parameter.description }}
                <div class="small" v-if="parameter.type === 'enum'">
                  Options:
                  <span v-for="option in parameter.options">
                    {{ option.name }}: <code>{{ option.value }}</code>
                  </span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div v-else>
          <p>No parameters.</p>
        </div>
      </div>
    </div>
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

  methods: {
    formatPlatform(platform) {
      switch (platform) {
        case 'twitch':
          return 'Twitch'
        case 'own3d':
          return 'OWN3D'
        case 'youtube':
          return 'YouTube'
        default:
          return platform
      }
    },
  },
}
</script>

<style scoped>
.small {
  font-size: 0.8em;
}

table {
  width: 100%;
}
.ae-badge {
  vertical-align: top;
  background-color: #42b983;
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: #fff;
}
</style>