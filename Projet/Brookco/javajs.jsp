
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


function chagerZoneItem(){
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
			 enregistrerPanier();
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
			document.querySelector(#unAjout").addEventListener("click",function(){
				var qte = document.querySelector("#txtQuantite").value;
				var lignCommande ={produit :unProduit,quantite:qte);  
            document.querySelector("#zoneDetail").style.display				
	        document.querySelector(""#txtQuantite").value= "1"					
		    });
			
			function fermerDialogue(){
				document.querySelector(#zoneDetail").style.display = "none";	
		}	

   function enregistrerPanier(){
	   if(typeof(localStorage)= "undefined"){
		   alert("votre navigateur ne supporte pas les cookies");
		   return;
		   
	   }
		   localStorage.setItem("panier", JSON.stringify(panier)); 
   }





function afficherFacture()
{
	
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
          noeudTd1.appendChild(contenuTd1);
          noeudTr.appendchild(noeudTd1);		  
		 
		 
		  
	}

	
	
	
}







