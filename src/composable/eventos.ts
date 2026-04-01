import {ref, computed, watch} from 'vue';

interface Tarefa {
    id: number;
    texto: string;
    concluida: boolean;
}
export function useTarefas() {
    const eventos = ref<Tarefa[]>([])
    const busca = ref('')
    const filtroAtivo = ref<'todas' | 'pendentes' | 'concluidas'>('todas')
    const filtradas = computed(() => {
    const termo = busca.value.toLowerCase()
    return eventos.value
    .filter (t => t.texto.toLowerCase().includes(termo))
    .filter (t => {
        if (filtroAtivo.value === 'pendentes') return !t.concluida
        if (filtroAtivo.value === 'concluidas') return t.concluida
        return true
    })
    })

    const totalPendentes = computed(() => eventos.value.filter(t => !t.concluida).length)
    
    function adicionar (texto: string) {
        if (!texto.trim()) return
        eventos.value.push({id: Date.now(), texto, concluida: false})
    }

    function remover (id: number) {
        eventos.value = eventos.value.filter(t => t.id !== id)
    }

    function concluir (id: number) {
        const t = eventos.value.find(t => t.id === id)
        if (t) t.concluida = !t.concluida
    }
    watch(totalPendentes, (valor) => {
        if (valor === 0 && eventos.value.length > 0) {
           console.log('Parabéns! Você concluiu todas as tarefas!')  
        }
    
    })
    return {
        eventos,
        busca,
        filtroAtivo,
        filtradas,
        totalPendentes,
        adicionar,
        remover,
        concluir
    }
}