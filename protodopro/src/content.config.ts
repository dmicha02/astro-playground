// Importer le chargeur glob
import { glob } from "astro/loaders";
// Importer des utilitaires depuis `astro:content`
import { z, defineCollection } from "astro:content";
// Définir un chargeur (`loader`) et un schéma (`schema`) pour chaque collection

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./src/projects" }),
    schema: z.object({
        title: z.string(),
        iconName: z.string(),
        id: z.number(),
        prod: z.boolean(),
    }),
    
});

// Exportez un seul objet `collections` pour enregistrer votre/vos collection(s)
export const collections = { projects };