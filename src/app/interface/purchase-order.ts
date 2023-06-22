import { DocumentLine } from "./document-line"

export interface PurchaseOrder {
    CardCode: string
    DocEntry: number
    DocumentLines: DocumentLine[]
  }