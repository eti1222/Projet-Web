function ajouterItem(produit,quantite,prix){
   var nouvelleLigne ="<tr>";
   nouvelleLigne += "<td>" + produit + "</td>";
   nouvelleLigne += "<td>" + quantite + "</td>";
   nouvelleLigne += "<td>" + prix + "</td>";
   nouvelleLigne += "</tr>";
   
   var ancienContenu = document.getElementById("corpsTableau").innerHTML;
   var nouveauContenu = ancienContenu + nouvelleLigne;
   document.getElementById("corpsTableau").innerHTML = nouveauContenu;
   
   var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
   nombreItemPanier += parseInt (quantite);
   document.getElementById("idItem").innerHTML = nombreItemPanier;
}
function afficherFacture(){
	document.getElementById("zoneContenuItem").style.display = "none";
	document.getElementById("zoneContenuFacture").style.display ="block";
}


function valider1(){
	
	const TAUX_TPS= 0.05;
	const TAUX_TVQ=0.090975;
	var prixProduit = parseFloat(document.["zoneContenuFacture"].element.["Prix unitaire"].value;
	var quantite = parseInt(document.["zoneContenuFacture"].element.["Quantite"].value;
	var totalAvantTaxes = prixProduit  * quantite ;
}


chagerZoneItem(){
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET","produits.json",false);
    xhr.send();
    if(xhr.readyState == 4){
	var reponse = xhr.reponseText;
	var objetJSON = JSON.parse(reponse);
	listeproduits = objetJSON.liste;
	afficherListeProduits();
   }
}
	



function afficherListeproduits(){
	
	listProduits.forEach(function(item){
		
		var description = item.description;
		var image = item.image;
		var prix = item.prix;
		var noeudDivItem = document.createElement("div");
		var noeudDivItem.setAttribute("class","item");
		
		var noeudImage = document.createElement("img")
		noeudImage.setAttribute("class","imageItem");
		noeudImage.setAttribute("src", image);
		noeudDivItem.appendchild(noeudImgae);
		
		noeudImage.addEventListener("click", function(){
		   afficherDetail(item);	
		});
		
		var noeudDescription = document.createElement("div");
		noeudDescription.setAttribute("class","description");
		noeudDescription.appendChild(document.createTextNode(description);
		noeudDivItem.appendchild(noeudDescription);
		
		var noeudPrix = document.createElement("div");
		noeudDescription.setAttribute("class","prix");
		noeudDescription.appendChild(document.createTextNode(prix);
		noeudDivItem.appendchild(noeudPrix);
		
		var noeudbtnAjouter = document.createElement("div");
		noeudBtnAjouter.setAttribute("class","ajouter");
		noeudAjouter.appendChild(document.createTextNode(Ajouter);
		noeudDivItem.appendchild(noeudBtnAjouter);
		
		noeudAjouter.addEventListener("click", function(){
		   var ligneCommande = (produit : item,quantite : "1");
           ajouterItem(lignCommande);		   
		});
		
	    document.getElementById("zoneContenuItem").appendchild(noeudDivItem);
		
		
	      });
         }
		 function ajouterItem(lignCommande){
			 
			 panier.push(lignCommande);
			 var quantite = ligneCommande.quantite
			 var nbItemPanier = parseInt(document.getElementById("idItem").innerHTML);
			 var nbItemPanier += parseInt(quantite);
			 document.getElementById("idItem").InnerHTML = nbItemPanier;
			 
		 }
		 
		 
	function afficherDetail(unProduit){
			document.querySelector("#zoneDetail").style.display = "block";	
			document.querySelector("#uneImage").src = unProduit.image;	
			document.querySelector("#zoneDescription").innerHTML = "unProduit.description";	
			document.querySelector("#unPrix").innerHTML = unProduit.prix;	
			document.querySelector("#unDetail").innerHTML = unProduit.details;
			document.querySelector(#unAjout")
						
		    }
			
			function fermerDialogue(){
				document.querySelector(#zoneDetail").style.display = "none";	
		}	







function afficherFacture()
{
	
	document.getElementById("ZoneContenuItem").style.display="none";
	document.getElementById("zoneContenuFacture").style="block"	
	
}






