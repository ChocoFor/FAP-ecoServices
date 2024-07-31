# Utiliser une image de base PHP avec Apache
FROM php:8.0-apache

# Copier les fichiers de l'application dans le conteneur
COPY . /var/www/html/

# Installer les extensions PHP nécessaires (ajustez selon vos besoins)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Définir le répertoire de travail
WORKDIR /var/www/html

# Définir la commande par défaut pour démarrer le serveur Apache
CMD ["apache2-foreground"]
