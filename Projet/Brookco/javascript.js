function afficher(){

 var user = document.forms["frm"].elements["txuser"].value;
 var Password = document.forms["frm"].elements["txpwd"].value;

  
 // var zoneAffichage = document.getElementById("zoneAffichage");
 document.getElementById("idAffichageNomPrenom").innerHTML = "Bienvenu"+" "+user;
 
	  
	  zoneAffichage.style.display = "block";
	 
		   
  }
  
  function afficher1(){
	  
	 // document.getElementsByClassName('card').innerHTML = "Bienvenu"+" "+user;
 
	zoneAffichageins.style.display = "block";
	//login-page.style.display="none";
	  
  }
  
  
  function afficher2(){
	  
	 // document.getElementsByClassName('card').innerHTML = "Bienvenu"+" "+user;
 
	//login-page.style.display ="none";
	//login-page.style.display="none";
	//zoneAffichage = document.getElementById("zoneAffichageins")
	//zoneAffichage.style.display="block";
	document.getElementById("login-page").style.display = "none";
	document.getElementById("zoneContenucontact").style.display = "block";
	document.getElementById("zoneAffichageins").style.display = "block";
	
	  
  }
  
  function afficher3(){
 var Courriel = document.forms["frm"].elements["txuser"].value;
 var Password = document.forms["frm"].elements["txpwd"].value;

  
 // var zoneAffichage = document.getElementById("zoneAffichage");
 document.getElementById("idAffichageNomPrenom").innerHTML = "Bienvenu"+" "+user;
 
	  
	  zoneAffichage.style.display = "block";
      idZoneAffichage.style.display ="block";
	  idZoneAffichage3.style.display ="block";
  }
  
  function afficherFacture(){
	document.getElementById("zoneContenuItem1").style.display = "none";
	document.getElementById("zoneContenuFacture").style.display ="block";
}
  
  
  function afficher4(){
	 zoneAcceuil.style.display = "block"; 
  }
  
  
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
function valider(){
	var nom = document.forms["formulaire"].elements["txtNom"].value;
	var prenom = document.forms["formulaire"].elements["txtPrenom"].value;
	
	//document.getElementById("idAffichageNomPrenom").innerHTML = nom+""+prenom;
	var langueFrancaise = document.forms["formulaire"].elements["chkFrancais"].checked;
	var langueAnglaise = document.forms["formulaire"].elements["chkAnglais"].checked; 
	var autreLangue = document.forms["formulaire"].elements["chkAutres"].checked;
    var languesParlees = "";		
	if(langueFrancaise == true){
		languesParlees = document.forms["formulaire"].elements["chkFrancais"].value;
	}
	
	if(langueAnglaise == true){	
		if(languesParlees !=""){
			languesParlees += ",";
		}
		languesParlees +=document.forms["formulaire"].elements["chkAnglais"].value;
	}
	if(autreLangue == true){
		var textAutresLangues = document.forms["formulaire"].elements["txtAutres"].value;
		if(textAutresLangues !=""){
			if(languesParlees !=""){
				languesParlees +=",";
			}
			languesParlees += textAutresLangues;	
	}	
}

var listeSexe = document.forms["formulaire"].elements["radioSexe"];
var sexe = "";
for(var i = 0; i < listeSexe.length; i++){
	if(listeSexe[i].checked){
		sexe = listeSexe[i].value;
	  break;
     }
   }
   var indexEtatCivil = document.forms["formulaire"].elements["cboEtatCivil"].selectedIndex;
   var etatCivil = document.forms["formulaire"].elements["cboEtatCivil"].options[indexEtatCivil].text;
   var commentaire = document.forms["formulaire"].elements["txtCommentaire"].value;
   var adresse ="";
   var numero = document.forms["formulaire"].elements["txtNumero"].value;
   var rue = document.forms["formulaire"].elements["txtRue"].value;
   var app = document.forms["formulaire"].elements["txtApp"].value;
   var ville = document.forms["formulaire"].elements["txtville"].value;
   var codePostal = document.forms["formulaire"].elements["txtcodePostal"].value;
   var indexProvince = document.forms["formulaire"].elements["cboProvince"].selectedIndex;
   var province = document.forms["formulaire"].elements["cboProvince"].options[indexProvince].text;
   
   adresse += numero+ " " + rue;
   if(app != ""){
	   
	 adresse += "app" + app; 
	 
   }
  // adresse += "," + ville + "," + province + "," + codePostal;
   //var photo = document.forms["formulaire"].elements["txtPhoto"].files[0].name;
   
   //document.getElementById("idAffichageNomPrenom").innerHTML = nom + " " + prenom;
 //  document.getElementById("idAffichageAdresse").innerHTML = adresse;
  // document.getElementById("idAffichageSexe").innerHTML = sexe;
  // document.getElementById("idAffichageEtatCivil").innerHTML = etatCivil;
  // document.getElementById("idAffichageLangueparlee").innerHTML = languesParlees;
 //  document.getElementById("idAffichageCommentaire").innerHTML = commentaire;
  // document.getElementById("idAffichagePhoto").src = photo;
  // document.getElement("idZoneAffichage").style.display="block";
}




