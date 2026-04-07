<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Eventos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="tarefa-container">
        <div class="input-group">
          <ion-input v-model="NovoEvento" placeholder="Digite uma Novo evento..."
            @keyup.enter="adicionarNova"></ion-input>
          <ion-button @click="adicionarNova" color="success" fill="solid" expand="block" slot="end">
            <ion-icon :icon="addOutline"></ion-icon> Adicionar
          </ion-button>
          <ion-input v-model="Novadescricao" placeholder="Digite uma descrição..."
            @keyup.enter="adicionarDescricao"></ion-input>

        </div>

        <template v-if="filtradas.length > 0">
          <CardEventos v-for="tarefa in filtradas" :key="tarefa.id" :eventos="tarefa" @remover="remover"
            @concluir="concluir" @favoritar="toggleFavorito"></CardEventos>

        </template>
        <div class="vazio" v-else>
          <p>Não há eventos para mostrar.</p>
        </div>
      </div>
    </ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title>Eventos</ion-title>

      </ion-toolbar>

    </ion-header>

    <IonButton @click="router.push('/Home')">voltar para home</IonButton>
  </ion-page>


</template>


<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonTitle, IonToolbar, IonInput } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import CardEventos from '../components/CardEventos.vue';
import { useTarefas } from '../composable/eventos';

const { filtradas, adicionarEvento, remover, concluir, toggleFavorito } = useTarefas()
const NovoEvento = ref('')
const Novadescricao = ref('')
function adicionarNova() {
  adicionarEvento(NovoEvento.value, Novadescricao.value)
  Novadescricao.value = ''
  NovoEvento.value = ''
}
function adicionarDescricao(){
  const id = adicionarEvento(Novadescricao.value, Novadescricao.value)
  if (id !== -1) {
    router.push(`/Detalhes/${id}`)
  }
  Novadescricao.value = ''
}


</script>
<style scoped>
.tarefa-container {
  padding: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

ion-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.lista-tarefas {
  margin-top: 20px;
}

.tarefa-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.vazio {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.vazio p {
  font-size: 16px;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>