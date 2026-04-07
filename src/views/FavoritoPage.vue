
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="tarefa-container">
        <template v-if="favoritos.length > 0">
          <CardEventos
            v-for="tarefa in favoritos"
            :key="tarefa.id"
            :eventos="tarefa"
            @remover="remover"
            @concluir="concluir"
            @favoritar="toggleFavorito"
          />
        </template>
        <div class="vazio" v-else>
          <p>Não há eventos favoritos.</p>
        </div>
      </div>
    </ion-content>

    <ion-button @click="router.push('/Eventos')">Eventos</ion-button>
    <ion-button @click="router.push('/home')">Home</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar } from '@ionic/vue';
import CardEventos from '../components/CardEventos.vue';
import { useTarefas } from '../composable/eventos';

const { favoritos, remover, concluir, toggleFavorito } = useTarefas();
</script>