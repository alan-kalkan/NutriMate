FROM node:18

# Définir le répertoire de travail
WORKDIR /app

COPY package*.json ./
RUN npm install
# Installer les dépendances nécessaires pour Prisma et bcrypt
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    make \
    && rm -rf /var/lib/apt/lists/*

# Copier les fichiers nécessaires pour installer les dépendances

COPY prisma ./prisma/

# Installer les dépendances de l'application


# Générer le client Prisma avec le chemin explicite du schéma
RUN npx prisma generate --schema=./prisma/schema.prisma

# Copier tout le reste du code source dans le conteneur
COPY . .

# Construire le projet (TypeScript -> JavaScript)
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000


# Ajouter une commande pour démarrer explicitement le serveur
CMD ["npm", "start"]
