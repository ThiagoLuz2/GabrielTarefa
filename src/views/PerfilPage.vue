<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login / Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="perfil-container">
        <ion-item>
          <ion-label position="floating">Nome</ion-label>
          <ion-input v-model="nome" placeholder="Digite seu nome"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">E-mail</ion-label>
          <ion-input type="email" v-model="email" placeholder="Digite seu email"></ion-input>
        </ion-item>

        <div class="perfil-info">
          <p><strong>Nome atual:</strong> {{ nome || 'não definido' }}</p>
          <p><strong>Email atual:</strong> {{ email || 'não definido' }}</p>
        </div>

        <ion-button expand="block" color="secondary" @click="limpar">Limpar</ion-button>
        <ion-button expand="block" color="primary" @click="router.push('/Home')">Voltar para Home</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, watch } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const nome = ref(localStorage.getItem('userNome') ?? '');
const email = ref(localStorage.getItem('userEmail') ?? '');

watch(nome, (valor) => {
  localStorage.setItem('userNome', valor);
});

watch(email, (valor) => {
  localStorage.setItem('userEmail', valor);
});

function limpar() {
  nome.value = '';
  email.value = '';
}
</script>

<style scoped>
.perfil-container {
  padding: 20px;
}
.perfil-info {
  margin: 20px 0;
  padding: 15px;
  background: #f7f7f7;
  border-radius: 10px;
}
.perfil-info p {
  margin: 8px 0;
}
</style>
