<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm6>
      <v-card>
        <v-img :src="mainImage" aspect-ratio="2"></v-img>
        <v-card-text>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae quasi velit
            assumenda exercitationem beatae tempore rem ut ipsam, eius quo at quis aut qui
            asperiores ducimus ab, eaque ad error nemo vel impedit! Saepe dolore nam fuga. Alias
            voluptatibus officiis odit culpa cumque ipsam deserunt eligendi animi illum tempore
            natus quidem laborum inventore, velit molestias! Exercitationem, harum voluptas, dicta
            natus, eligendi blanditiis illum accusantium nostrum id voluptates optio modi saepe odit
            ipsum est sapiente corporis facere vero nemo iusto incidunt. Accusantium aspernatur
            perferendis iure odio suscipit minima quasi fuga aliquam saepe voluptate similique nemo
            dolorem deserunt, blanditiis doloribus harum.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import image from '~/assets/main-img.png'

export default {
  data: () => ({
    mainImage: image
  }),
  head () {
    return {
      title: 'Главная'
    }
  }
}
</script>
