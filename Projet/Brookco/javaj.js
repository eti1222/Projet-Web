var listeProduit;
var panier = new Array();


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


function chargerZoneItem(){
	chargerPanier();
	var xhr = new XMLHttpRequest();
	
	xhr.open("get","produits.json",false);
    xhr.send();
    if(xhr.readyState == 4){
	var reponse = xhr.reponseText;
	var objetJSON = JSON.parse(reponse);
	
	listeproduits = objetJSON.liste;
	afficherListeProduits();
	//document.write(objetJSON.description);
	alert(reponse);
   }
}
	



function afficherListeproduits(){
	
	listeProduits.forEach(function(item){
		
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
		noeudDescription.appendChild(document.createTextNode(description));
		noeudDivItem.appendchild(noeudDescription);
		
		var noeudPrix = document.createElement("div");
		noeudDescription.setAttribute("class","prix");
		noeudDescription.appendChild(document.createTextNode(prix));
		noeudDivItem.appendchild(noeudPrix);
		
		var noeudbtnAjouter = document.createElement("div");
		noeudBtnAjouter.setAttribute("class","ajouter");
		noeudAjouter.appendChild(document.createTextNode("Ajouter"));
		noeudDivItem.appendchild(noeudBtnAjouter);
		
		noeudBtnAjouter.addEventListener("click", function(){
		    var ligneCommande = (produit : item,  quantite : "1");
            ajouterItem(ligneCommande);		   
		  });
		
	        document.getElementById("zoneContenuItem").appendchild(noeudDivItem);
	      });
         }
		 
		 function ajouterItem(lignCommande){
			 
			 panier.push(lignCommande);
			 enregistrerPanier();
			 var quantite = ligneCommande.quantite;
			 var nbItemPanier = parseInt(document.getElementById("idItem").innerHTML);
			  nbItemPanier += parseInt(quantite);
			 document.getElementById("idItem").InnerHTML = nbItemPanier;
			 
		 }
		 
         function afficherDetail(unProduit){
			document.querySelector("#zoneDetail").style.display = "block";	
			document.querySelector("#uneImage").src = unProduit.image;	
			document.querySelector("#uneDescription").innerHTML = unProduit.description;	
			document.querySelector("#unPrix").innerHTML = unProduit.prix;	
			document.querySelector("#unDetail").innerHTML = unProduit.details;
			
	
			document.querySelector("#unAjout").addEventListener("click",function(){
				var qte = document.querySelector("#txtQuantite").value;
				var lignCommande ={produit : unProduit, quantite : qte};
                ajouterItem(lignCommande);				
            document.querySelector("#zoneDetail").style.display="none";				
	        document.querySelector("#txtQuantite").value= "1";					
		    });
			
			function fermerDialogue(){
				document.querySelector("#zoneDetail").style.display = "none";	
		        }
             }		

   function enregistrerPanier(){
	   if(typeof(localStorage)= "undefined"){
		   alert("votre navigateur ne supporte pas les cookies");
		   return;
		   
	         }
		   localStorage.setItem("panier", JSON.stringify(panier)); 
          }





function afficheFacture(){
	
const TAUX_TPS = 0.05;
const TAUX_TVQ = 0.09975;
var listeProduit;
var panier = new Array();
const TAUX_TPS = 0.05;
const TAUX_TVQ = 0.09975;
	
	document.getElementById("ZoneContenuItem").style.display="none";
	document.getElementById("zoneContenuFacture").style="block"
    document.getElementById("zoneContenuFacture).style.height ="85%";
	
	var sousTotal = 0;
	var noeudTBody = document.createElement("#corpsTableau")
	
	panier.forEach(function(lignCommande.index){
		  var nomDeProduit = ligneCommande.produit.description;
		  var quatite = ligneCommande.produit.quantite;
		  var prix = ligneCommande.produit.prix;
		  sousTotal += parseInt(quantite)*parseFloat(prix)
		 
          var  noeudTr  =  document.createElement("tr");
          var  noeudTd1 = document.createElement("td");	
          var  contenuTd1 = document.createTextNode(nomDeProduit);
          noeudTd1.appendchild(contenuTd1);
          noeudTr.appendChild(noeudTd1);
          
		  var noeudTd2 = document.createElement("td");
		  var noeudtd21 = document.createElement("input");
		  noeudTd21.setAttribute("type","text");
		  noeudTd21.setAttribute("value",quantite);
		  noeudTd21.addEventListener("value",quantite);
		     var nouvelleQte = this.value;
			 panier[index].quantite = nouvelleQte;
			 enregistrerPanier();
			 calculerFacture();
	      });
		  noeudTd3.appendchild(noeudTd21);
		  noeudTr.appendchild(noeudTd2);
		  
		  var noeudTd3 = document.createElement("td");
		  var contenuTd3 = document.createTextNode(prix);
		  noeudTd3.appendchild(contenuTd3);
		  noeudTr.appendchild(noeudTd3);
		  
		 
		  noeudTrBody.appendchild(noeudTr);
		  
         });
		 
		 var totalTPS = sousTotal * TAUX_TPS;
		 var totalTVQ = sousTotal * TAUX_TVQ;
		 var total = sousTotal + totalTPS + totalTVQ;
		 document.querySelector("#idsousTotal").innerHTML = sousTotal.toFixed(2) + "$";
		 document.querySelector("#idTPS").innerHTML =totalTPS.toFixed(2) + "$";
         document.querySelector("#idTVQ").innerHTML = totalTVQ.toFixed(2) + "$";
         document.querySelector("#idTotal").innerHTML = total.toFixed(2)+ "$";		 
	}

function calculerFacture(){
      var sousTotal  = 0;
	  var totalQte = 0;
    panier.forEach(function(ligneCommande){
	

  var quantite = ligneCommande.quantite;
  var prix = ligneCommande.produit.prix;
  sousTotaL += parseInt(quantite) * parseFloat(prix);
  totalQte += parseInt(quantite);
 });

var totalTPS = sousTotal * TAUX_TPS;
var totalTVQ = sousTotal * TAUX_TVQ;
var total = sousTotal + totalTPS + totalTVQ;
	 
document.querySelector("#idSousTotal").innerHTML = sousTotal.toFixed(2) + " $ ";	 
document.querySelector("#idTPS").innerHTML = totalTPS.toFixed(2) + " $ ";
document.querySelector("#idTVQ").innerHTML = totalTVQ.toFixed(2) + " $ "; 
document.querySelector("#idTotal").innerHTML = total.toFixed(2) + " $ ";

document.getElementById("idItem").innerHTML = totalQte;

     }
	 
	 function chargerPanier(){
		 if(typeof(localStorage) == "undefined"){
			 alert("votre navigateur  ne supporte pas les cookies);
			 return;
		 }
		 if (!localStorage.panier){
            return;
		 }
		 
		 panier = JSON.parse(localStorage.getItem("panier"));
		 var totalQte = 0;
		 panier.forEach(function(ligneCommande){
			 var quantite = ligneCommande.quantite;
			 
			 totalQte += parseInt(quantite);
		 });
		 var nbrItemPanier = parseInt(document.getElementById("idItem").innerHTML);
		 nbrItemPanier += totalQte;
		 document.getElementById("idItem").innerHTML = nbItemPanier;
	 }
		 
			 
			 
			 
		

		  
		  
		  
	
		  
         		  
		  
		 
		  
	

	
	

	





