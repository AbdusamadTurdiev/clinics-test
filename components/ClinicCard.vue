<template>
  <v-card class="main-card pa-3">
    <v-layout column>
      <v-layout wrap align-center>
        <img :src="clinic.logo" :alt="clinic.name" class="mr-4" />
        <v-flex xs12 class="card-title">
          <h2 class="mb-2">{{ clinic.name }}</h2>
          <p class="mb-0">{{ clinic.address }}</p>
          <p class="font-weight-black mb-0">Минимальная цена услуг: {{ minPrice }} руб.</p>
        </v-flex>
      </v-layout>
      <div class="mt-3">
        <v-layout
          wrap
          :key="index"
          class="mb-2"
          align-center
          justify-space-between
          v-for="(service, index) in services"
        >
          <v-flex xs12 d-flex class="service-row">
            <div class="subheading">{{ service.name }}</div>
            <div class="subheading text-xs-right">{{ service.price }}</div>
          </v-flex>
          <v-btn
            class="toggle-button ma-0"
            @click="toggleService(service)"
            :color="service.selected ? 'warning' : 'info'"
          >
            {{ service.selected ? 'Отменить выбор' : 'Выбрать' }}
          </v-btn>
        </v-layout>
      </div>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    clinic: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    selected: false
  }),
  computed: {
    minPrice () {
      let prices = this.clinic.services.map(service => service.price)
      return Math.min(...prices)
    },
    services () {
      return this.clinic.services.map(service => service)
    }
  },
  methods: {
    toggleService (service) {
      service.selected
        ? this.$store.commit('removeService', service)
        : this.$store.commit('addService', service)
      service.selected = !service.selected
    }
  }
}
</script>

<style scoped>
.main-card {
  margin-bottom: 30px;
}
.toggle-button {
  width: 150px;
}

@media screen and (max-width: 767px) {
  .toggle-button {
    width: 100%;
    margin-top: 5px !important;
  }
}

@media screen and (max-width: 404px) {
  .card-title {
    flex: auto !important;
  }
}

@media screen and (min-width: 768px) {
  .service-row {
    flex: auto !important;
    margin-right: 10px;
  }
}
</style>

