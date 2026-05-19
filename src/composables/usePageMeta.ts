import { onMounted } from 'vue'

export function usePageMeta(title: string) {
  onMounted(() => {
    document.title = `${title} | Mohamed Gamal`
  })
}
