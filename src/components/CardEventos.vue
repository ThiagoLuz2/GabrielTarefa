<template>
    <ion-card>

        <!-- <ion-icon slot="start" :icon="props.tarefa.concluida ? checkmarkDoneOutline : ellipseOutline"
                    :color="props.tarefa.concluida ? 'success' : 'warning'"
                    @click="emit('concluir', props.tarefa.id)"/> -->
        <ion-card-header>
        
                {{ props.eventos.concluida ? '✅' : '⭕' }}
                
                    {{ props.eventos.texto }}
            
        </ion-card-header>
        <ion-card-content>
            <ion-button @click="emit('concluir', props.eventos.id)" size="small">
                ✔
            </ion-button>
            <ion-button color="danger" @click="emit('remover', props.eventos.id)">
                <ion-icon :icon="trashOutline" />
            </ion-button>
            <ion-button color="primary" @click="$router.push('/Detalhes')">
                Detalhes
            </ion-button>

        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import {
    IonCardContent, IonCardHeader,
    IonIcon,
    IonCard,
    IonButton,
} from '@ionic/vue';
import { trashOutline} from 'ionicons/icons';
interface Eventos {
    id: number;
    texto: string;
    concluida: boolean;
}
const props = defineProps<{ eventos: Eventos }>()
const emit = defineEmits<{
    remover: [id: number]
    concluir: [id: number]
}>()
</script>