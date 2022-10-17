DROP DATABASE IF EXISTS BookEtCoDatabase;
create database BookEtCoDatabase;
use BookEtCoDatabase;

-- creation table categorie
Drop table if exists Categorie;
CREATE TABLE Categorie(
 categorieID varchar(8) primary key,
 nomCategorie varchar(16)
 );
 
 -- Insertion des données dans la tables categorie
insert into Categorie values
	      ("F001", "Film"),
		  ("L002", "Livre"),
		  ("J003","Jeux Video");
		  
		  
		  


-- creation table Sous-categorie
drop table if exists SousCategorie;
CREATE TABLE SousCategorie(
 sousCategorieID varchar(16) primary key,
 nomSousCategorie varchar(64),
 categorieID varchar(8),
 FOREIGN KEY (categorieID) REFERENCES Categorie(categorieID));
 
 
 insert into SousCategorie values
	      ("INF", "Informatique","L002"),
		  ("LIT", "Littérature","L002"),
		  ("GEO", "Géographie","L002"),
		  ("SCF", "Sciences Fictions,","F001"),
		  ("COM", "Comédie","F001"),
		  ("DRA", "Drame et Action","F001"),
		  ("PLA", "Playstation","J003"),
		  ("XBO", "Xbox","J003"),
		  ("NIN", "Nintendo Wii U","J003");



drop table if exists Produit;
create table Produit(
	produitID int(10) primary key auto_increment,
	titre VARCHAR(50),
	image varchar(30),
	prix decimal(10,2),
	description varchar(200),
	sousCategorieID varchar(16),
	AnneSortie varchar(30),
	FOREIGN KEY (sousCategorieID) REFERENCES SousCategorie(sousCategorieID)	
	
);


insert into Produit values
	(null, "Java Comment programmer", "portable2.jpg",89.95, "4ieme Edition ISBN-289377-254-4", "INF","2015"),
	(null, "C++", "portable2.jpg",89.95, "4ieme Edition ISBN-289377-254-4", "INF","2015"),
	(null, "Lady Bird", "Film2.jfif",89.95, "Lady Bird is a 2017 American coming-of-age comedy", "COM","2017");
	

SELECT * from produit;

DROP TABLE IF EXISTS LIVRE;
CREATE TABLE Livre(
LivreID int(10) PRIMARY key auto_increment,
produitID int(10),
auteur VARCHAR(32),
FOREIGN KEY (produitID) REFERENCES Produit(produitID)	
);
insert into LIVRE values
	(null, 1, "Deilter");
	



DROP TABLE IF EXISTS Film;
CREATE TABLE Film(
fimlID int(10) PRIMARY key auto_increment,
produitID int(10),
auteur VARCHAR(32),
resumer VARCHAR(500),
FOREIGN KEY (produitID) REFERENCES Produit(produitID)	
);
insert into Film values
	(null, 3, "Greta Gerwig","Lady Bird is a 2017 American coming-of-age comedy-drama film written and directed by Greta Gerwig in her solo directorial debut. Set in Sacramento, California from fall 2002 to fall 2003, it is a story of a high school senior and her strained");


DROP TABLE IF EXISTS jeuxVideo
CREATE TABLE jeuxVideo(
jeuxVideoID int(10) PRIMARY key auto_increment,
produitID int(10),
resumer VARCHAR(220),
FOREIGN KEY (produitID) REFERENCES Produit(produitID)	
);
insert into Film values
	(null, 3, "Greta Gerwig","Lady Bird is a 2017 American coming-of-age comedy-drama film written and directed by Greta Gerwig in her solo directorial debut. Set in Sacramento, California from fall 2002 to fall 2003, it is a story of a high school senior and her strained");



-- table utilisateur
Drop table if exists utilisateur;
CREATE TABLE Utilisateur(
 userID int(10) primary key auto_increment,
 nom varchar(32),
 prenom varchar(32),
 password varchar(32),
 courriel varchar(32));
 
 insert into Utilisateur values
	(null, "Jean", "Dupont","password","user@gmail.com"),
	(null, "Joseph", "Dupont","password","user@gmail.com");
	
 
 -- table Client
 Drop table if exists client;
CREATE TABLE client(
 clientID int(10) primary key auto_increment,
 addresse varchar(64),
 userID int(10),
 FOREIGN KEY (userID) REFERENCES Utilisateur(userID));
 
  insert into client values
	(null, "9999 rue Montreal",1);

 
 
 -- creattion table GestionnaireStock
Drop table if exists GestionnaireStock;
CREATE TABLE GestionnaireStock(
 gestionnnaireID int(10) primary key auto_increment,
 userID int(10),
 FOREIGN KEY (userID) REFERENCES utilisateur(userID));

 insert into GestionnaireStock values
		(null,2);
		
-- creation table Foursnisseur
 
 -- Fourniseur 
 CREATE TABLE Fourniseur(
  fourniseurID int(10) primary key auto_increment,
  nom VARCHAR(32),
  adresse VARCHAR(64),
  telephone VARCHAR(16),
  couriel  VARCHAR(16));
   insert into Fourniseur values
	(null, "CogecoMediateque", "150 rue Quebec ","234 567566","user@gmail.com");
  
 CREATE TABLE Inventaire(
  inventaireID int(10) PRIMARY key auto_increment,
  );
  
 CREATE TABLE Facture(
     numeroFacture int(10) PRIMARY key auto_increment,
	 numeroCommande int(10),
	 montantAvantTaxe decimal(10,2)
	 date DATE(),
	 montantTPS decimal(10,2),
	 montantTVQ decimal(10,2),
	FOREIGN KEY (numeroCommande) REFERENCES Commande(numeroCommande));
	 
	 
CREATE TABLE Commande(
	 numeroCommande int(10),
	 clientID int(10),
	 dateCommande date,
	 EtatCommande VARCHAR(16), 
	 FOREIGN KEY (numeroCommande) REFERENCES Commande(numeroCommande),
	 FOREIGN KEY (clientID) REFERENCES client(clientID));
	 	 
);


CREATE TABLE LigneCommande(
     ligneCommandeID int(10) PRIMARY key auto_increment,
	 ProduitID int(10),
	 QuantiteItem (int), 
	 numeroCommande int(10),
	
	 FOREIGN KEY (ProduitID) REFERENCES Produit(ProduitID));
	 	 
);