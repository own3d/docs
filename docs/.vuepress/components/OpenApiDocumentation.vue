<template>
  <div v-if="openapi">
    <div v-for="(path, pathName) in openapi.paths" v-if="!isPrivatePath(pathName)">
      <div v-for="(method, methodName) in path" v-if="!isPrivateMethod(method)"
           class="card" :id="id(methodName, pathName)">
        <div class="card-body">
          <h3 style="margin-top: 0;" class="d-flex">
            <div>
              <a :href="`#${id(methodName, pathName)}`" class="header-anchor">
                #
              </a>
              <span :class="`badge badge-${methodName}`">{{ methodName.toUpperCase() }}</span>
              {{ pathName }}
            </div>
            <div>
              <span v-if="isDeprecated(method)" :class="`badge badge-deprecated`">Deprecated</span>
            </div>
          </h3>

          {{ method.summary }}

          <pre>{{ methodName.toUpperCase() }} {{ baseUrl }}{{ pathName }}</pre>
        </div>

        <template v-if="method.parameters">
          <div class="card-header">Parameters</div>
          <div class="table-responsive">
            <table class="table" width="100%">
              <thead>
              <tr>
                <th width="20%">Name <small>/type</small></th>
                <th width="40%">Description <small>/example</small></th>
                <th width="10%">Constraints</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="param in method.parameters">
                <td>
                  <b>{{ param.name }}</b>
                  <div class="small">
                    <span v-if="param.in">{{ param.in }}</span>
                    <span v-if="param.schema && param.schema.type && param.in">|</span>
                    <span v-if="param.schema && param.schema.type">{{ param.schema.type }}</span>
                  </div>
                </td>
                <td>
                  {{ paramDescription(param.name, param.description) }}
                  <div class="small" v-if="param.example">
                    <code>{{ param.example }}</code>
                  </div>
                </td>
                <td>
                  {{ param.required ? 'Required' : 'Optional' }} <br/>
                  <div v-if="param.default">
                    Default: {{ param.default }} <br/>
                  </div>
                  <div v-if="param.enum">
                    Enum: {{ param.enum.join(', ') }} <br/>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>

        <div class="card-header">Responses</div>
        <!-- list all responses -->
        <div v-for="(response, responseName) in method.responses" class="card-body">
          <span :class="`badge badge-${responseName}`">{{ responseName.toUpperCase() }}</span>
          <span v-if="response.description">{{ response.description }}</span>
          <span v-else>{{ responseDescription(responseName) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OpenApiDocumentation",

  props: ['specs', 'baseUrl'],

  data() {
    return {
      openapi: null,
    }
  },

  mounted() {
    // fetch this.specs and store it in this.openapi
    axios.get(this.specs).then(response => {
      this.openapi = response.data;
      console.log(this.openapi);
    });
  },

  methods: {
    isPrivatePath(pathName) {
      return pathName.startsWith('/admin');
    },
    isPrivateMethod(method) {
      // check if method has x-internal property
      return method['x-internal'];
    },
    isDeprecated(method) {
      return method.deprecated;
    },
    id(methodName, pathName) {
      // replace all `[]{}/` with dashes
      pathName = pathName.replace(/[\[\]{}\/]/g, "-");
      return `${methodName}${pathName}`;
    },
    paramDescription(name, description) {
      if(description) {
        return description;
      }

      switch (name) {
        case 'Authorization':
          return 'The authorization token';
        case 'locale':
          return 'The locale to use for the response';
        case 'id':
          return 'ID of the resource';
        case 'user_id':
          return 'ID of the user';
        case 'order_id':
          return 'ID of the order';
        case 'code':
          return 'The code to use for voucher redemption';
        case 'page':
          return 'Page number';
        case 'per_page':
          return 'Number of items per page';
        case 'q':
          return 'Search query';
        case 'sort':
          return 'Sort order';
        default:
          return description;
      }
    },
    responseDescription(responseName) {
      switch (responseName) {
        case '200':
          return 'OK';
        case '201':
          return 'Created';
        case '204':
          return 'No Content';
        case '301':
          return 'Moved Permanently';
        case '302':
          return 'Found';
        case '307':
          return 'Temporary Redirect';
        case '400':
          return 'Bad Request';
        case '401':
          return 'Unauthorized';
        case '403':
          return 'Forbidden';
        case '404':
          return 'Not Found';
        case '405':
          return 'Method Not Allowed';
        case '409':
          return 'Conflict';
        case '422':
          return 'Unprocessable Entity';
        case '500':
          return 'Internal Server Error';
        case '502':
          return 'Bad Gateway';
        case '503':
          return 'Service Unavailable';
        default:
          return 'Unknown';
      }
    }
  }
}
</script>

<style scoped>
  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .small {
    font-size: 0.8em;
  }
  pre {
    font-size: 0.8em;
    color: #fff;
  }
  .badge {
    padding: 0 5px;
    background-color: #a0a0a0;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
  }
  .badge-deprecated {
    color: #7e7e7e;
    background-color: #181e23;
  }
  .badge-get {
    background-color: #504a6c;
  }
  .badge-post {
    background-color: #4a7963;
  }
  .badge-put, .badge-patch {
    background-color: #8f7346;
  }
  .badge-delete {
    background-color: #91625c;
  }
  .badge-200, .badge-201, .badge-204 {
    background-color: rgba(0, 166, 90, 0.4);
    color: #fff;
  }
  .badge-400, .badge-401, .badge-403, .badge-404, .badge-409, .badge-422 {
    background-color: rgba(243, 156, 18, 0.4);
    color: #fff;
  }
  .badge-301, .badge-302, .badge-307 {
    background-color: rgba(0, 122, 166, 0.4);
    color: #fff;
  }
  .badge-500, .badge-502, .badge-503{
    background-color: rgba(221, 75, 57, 0.4);
    color: #fff;
  }
  .card {
    margin-bottom: 2rem;
  }
  .card-body {
    padding: 15px;
    border: 1px solid #181e23;
  }
  .card-header {
    padding: 10px 15px;
    border-left: 1px solid #292934;
    border-right: 1px solid #292934;
    background-color: #181e23;
    font-weight: bold;
  }
  .table-responsive {
  }
  .table {
    margin: 0;
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    border-color: #181e23;
  }
  .table table, th, td {
    border: 1px solid #292934;
  }
  .table thead {
    width: 100%;
    background-color: #363644;
  }
  .table tbody {
    width: 100%;
  }
  .table tr {
    width: 100%;
  }
</style>