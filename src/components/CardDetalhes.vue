<template>
    <ion-card>

        <!-- <ion-icon slot="start" :icon="props.tarefa.concluida ? checkmarkDoneOutline : ellipseOutline"
                    :color="props.tarefa.concluida ? 'success' : 'warning'"
                    @click="emit('concluir', props.tarefa.id)"/> -->
        <ion-card-header>
        
                    {{ props.descricao.texto }}
  
        </ion-card-header>
        <ion-card-content>
         

        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import {
    IonCardContent, IonCardHeader,
    IonCard,
} from '@ionic/vue';
interface Descricao {
    id: number;
    texto: string;
}
const props = defineProps<{ descricao: Descricao }>()

</script>