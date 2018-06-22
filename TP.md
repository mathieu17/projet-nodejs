# TP Noté

Pour ce TP vous devez créer les routes, les middleware ainsi que les services afin de compléter la spécification User précisée dans l'API Blueprint.

## Contraintes
- A la différence des autres ressources de cette API, les utilisateurs sont managés via l'adresse email et non par l'ID.
- Le mot de passe ne doit jamais ressortir, c'est une donnée privée!
- Le mot de passe doit être chiffré avant l'insert en base de donnée.
- La recherche des utilisateurs se fait sur le `firstName` et sur le `lastName`.
- La commande `npm test` ne doit pas retourner d'erreur.

## Temps & Conditions
- Vous disposez d'**1h30**.
- Vous pouvez vous servir de tout ce que nous avons fait durant cette semaine ainsi que d'internet.
- Vous devez réaliser ce TP individuellement.

## Rendu
Vous devez pusher sur votre fork de ce repo. Toutes les dates des commits doivent être antérieure à l'heure de fin du TP, dans le cas contraire, cela sera considéré comme triche et vous serez pénalisé.

Afin de tester votre rendu je suiverai à la lettre le processus d'installation du README.md, pensez donc à le mettre à jour si des changements sont à préciser et à bien sauvegarder vos modules dans le `package.json`.

## Point bonus
- Votre architecture respect la philosophie modulaire.
- Vos fichiers comportent au moins 1 test unitaire.
