export interface CardResponse {
  trace_id: string
  data: CardData
}

export interface CardData {
  cartoes: Card[]
}

export interface Card {
  numero: string
  codigo_seguranca: string
  limite: number
  validade: string
  nome: string
  tipo: string
  legado: boolean
  bandeira: string
}