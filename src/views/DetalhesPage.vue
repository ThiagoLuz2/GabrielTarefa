<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Detalhes do Evento</ion-title>
                </ion-toolbar>
            </ion-header>
              
            <div id="container">
                <p v-if="evento">Evento: {{ evento.texto }}</p>
                <card-detalhes v-if="desc" :descricao="desc"></card-detalhes>
                <p v-else-if="evento">Este evento não possui descrição.</p>
                <p v-else>Evento ou descrição não encontrada.</p>
            </div>
        </ion-content>
        <ion-button @click="router.push('/Eventos')">Voltar</ion-button>
    </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import CardDetalhes from '../components/CardDetalhes.vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useTarefas } from '../composable/eventos';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const { eventos, descricao } = useTarefas();

const desc = computed(() => {
  const id = parseInt(route.params.id as string);
  return descricao.value.find(d => d.id === id);
});

const evento = computed(() => {
  const id = parseInt(route.params.id as string);
  return eventos.value.find(e => e.id === id);
});
</script>