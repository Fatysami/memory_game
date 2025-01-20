Memory Game 🎮
Description 📖
Memory Game est un jeu de mémoire où l’objectif est de retrouver les paires de cartes identiques parmi un ensemble de cartes retournées face cachée. Le joueur peut personnaliser son expérience de jeu en choisissant la taille du jeu et la durée du temps imparti, tout en ayant la possibilité de consulter son historique de parties.

Fonctionnalités ✨
Jeu de mémoire : Le but est de retrouver les paires de cartes identiques en les retournant une par une.
Personnalisation : Choisis le nombre de cartes à jouer (4, 16 ou 32) et le temps limite (60, 120 ou 180 secondes).
Historique des parties : Consulte ton historique de parties, comprenant la date, le score et la durée de chaque partie.
Apparence personnalisée : Change la couleur de fond du jeu pour un environnement plus agréable à jouer.
Installation 🚀
Cloner le projet :

bash
Copy
git clone https://github.com/votre-nom/memory-game.git
Installer les dépendances avec npm ou yarn :

bash
Copy
npm install
ou

bash
Copy
yarn install
Lancer le projet :

bash
Copy
npm start
ou

bash
Copy
yarn start
Accédez au jeu via http://localhost:3000.

Technologies utilisées 🛠️
React : Librairie principale pour la construction de l'interface utilisateur.
Context API : Pour une gestion de l'état global dans l'application.
LocalStorage : Permet de sauvegarder l'historique des parties et d'assurer la persistance des données.
CSS : Utilisé pour styliser et animer les éléments du jeu.
Structure du projet 🗂️
bash
Copy
/src
/components
Card.js # Composant représentant chaque carte du jeu
Timer.js # Composant pour afficher et gérer le timer
SettingsMenu.js # Menu pour configurer les paramètres du jeu
/context
GameContext.js # Gère l'état global du jeu (cartes, score, etc.)
/pages
GamePage.js # Page principale du jeu
HistoryPage.js # Page affichant l'historique des parties
/styles
GamePage.css # Styles spécifiques à la page du jeu
SettingsMenu.css # Styles du menu des paramètres
HistoryPage.css # Styles de l'historique
Card.css # Styles des cartes
App.js # Composant principal de l'application
index.js # Point d'entrée de l'application
Fonctionnement du jeu 🎲
Début du jeu :

Le joueur choisit le nombre de cartes et le temps limite dans les paramètres.
Les cartes sont ensuite mélangées et affichées face cachée.
Retourner les cartes :

Lorsqu'un joueur clique sur une carte, elle se retourne et affiche son contenu.
Si deux cartes sont identiques, elles restent retournées.
Si elles sont différentes, elles se retournent après un délai de 1 seconde.
Fin du jeu :

Le jeu se termine lorsque toutes les paires sont trouvées ou lorsque le temps est écoulé.
Le score et le temps sont affichés à la fin de la partie, puis l'historique est enregistré.
Historique des parties :

L'historique des parties est enregistré dans le LocalStorage pour une consultation ultérieure.
Les résultats des parties (date, score, durée) sont affichés dans la page Historique.
Contributions 💪
Les contributions sont les bienvenues ! Si tu souhaites contribuer à ce projet, voici comment faire :

Fork le dépôt.
Crée une branche pour ta fonctionnalité (git checkout -b feature/ma-fonctionnalite).
Commit tes changements (git commit -am 'Ajout de ma fonctionnalité').
Pousse tes changements (git push origin feature/ma-fonctionnalite).
Ouvre une pull request pour discuter des modifications.
