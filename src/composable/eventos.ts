import {ref, computed, watch} from 'vue';
interface Descricao{
    id: number;
    texto: string;
}
interface Tarefa {
    id: number;
    texto: string;
    concluida: boolean;
    favorito: boolean;
}

const eventos = ref<Tarefa[]>([])
const descricao = ref<Descricao[]>([])
const busca = ref('')
const filtroAtivo = ref<'todas' | 'pendentes' | 'concluidas'>('todas')

const filtradas = computed(() => {
  const termo = busca.value.toLowerCase()
  return eventos.value
    .filter(t => t.texto.toLowerCase().includes(termo))
    .filter(t => {
      if (filtroAtivo.value === 'pendentes') return !t.concluida
      if (filtroAtivo.value === 'concluidas') return t.concluida
      return true
    })
})

const totalPendentes = computed(() => eventos.value.filter(t => !t.concluida).length)
const favoritos = computed(() => eventos.value.filter(t => t.favorito))

function adicionarEvento(nome: string, desc?: string): number {
  if (!nome.trim()) return -1
  const id = Date.now()
  eventos.value.push({id, texto: nome, concluida: false, favorito: false})
  if (desc && desc.trim()) descricao.value.push({id, texto: desc})
  return id
}

function adicionarDescricao(texto: string): number {
  if (!texto.trim()) return -1
  const id = Date.now()
  eventos.value.push({id, texto, concluida: false, favorito: false})
  descricao.value.push({id, texto})
  return id
}

function remover(id: number) {
  eventos.value = eventos.value.filter(t => t.id !== id)
  descricao.value = descricao.value.filter(d => d.id !== id)
}

function concluir(id: number) {
  const t = eventos.value.find(t => t.id === id)
  if (t) t.concluida = !t.concluida
}

function toggleFavorito(id: number) {
  const t = eventos.value.find(t => t.id === id)
  if (t) t.favorito = !t.favorito
}

watch(totalPendentes, (valor) => {
  if (valor === 0 && eventos.value.length > 0) {
    console.log('Parabéns! Você concluiu todas as tarefas!')
  }
})

export function useTarefas() {
  return {
    eventos,
    descricao,
    busca,
    filtroAtivo,
    filtradas,
    favoritos,
    totalPendentes,
    adicionarEvento,
    adicionarDescricao,
    remover,
    concluir,
    toggleFavorito
  }
}