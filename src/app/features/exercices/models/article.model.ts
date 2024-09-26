export interface Article {
  id?: string;
  nom: string;
  estImportant: boolean;
  tags?: string[];
  nutriscore?: Nutriscore;
  prix?: number;
  quantite?: number;
  categorie?: { nom: string, description: string };
}
