<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10>
      <Clinic-Card v-for="(clinic, index) in clinics" :key="index" :clinic="clinic"></Clinic-Card>
      <h3 class="general-price font-weight-black">
        Общая сумма выбраных услуг: {{ generalPrice }} руб.
      </h3>
    </v-flex>
  </v-layout>
</template>

<script>
import ClinicCard from '@/components/ClinicCard'

export default {
  head () {
    return {
      title: 'Клиники - СПАРК'
    }
  },
  components: {
    ClinicCard
  },
  data: () => ({
    clinics: []
  }),
  computed: {
    generalPrice () {
      return this.$store.getters['generalPrice']
    }
  },
  methods: {
    getClinics () {
      this.$axios.$get('/bell').then(res => {
        this.clinics = res
      })
    }
  },
  created () {
    this.getClinics()
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  .general-price {
    font-size: 14px;
  }
}
</style>
