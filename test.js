/*VO*/
function getCollaborateursParProjet() {
	//console.log("fonction OK");
	if(document.getElementById("collaborateurList").disabled==false)
	{
		var projet = dwr.util.getValue('projetList');
		var collaborateur = dwr.util.getValue('collaborateurList');
		if(projet==""){
			document.getElementById("collaborateurList").value="";
		}
		AjaxDependentComboBox.getCollaborateursParListProjets(projet , function(data) {
			document.getElementById("collaborateurList").length=data[0].length+1;
			cnt=0;
			if(data!=null){
				for(i=0;i<data[0].length;i++){
					document.getElementById("collaborateurList")[i+1].value=data[0][i];
					document.getElementById("collaborateurList")[i+1].text=data[1][i];
					cnt++;
				}
				document.getElementById("collaborateurList").length=cnt+1;
				document.getElementById("collaborateurList").value=collaborateur;
			}
		});
	}
}

// Fonction dans ctler, VO :
public String[][] getCollaborateursParListProjets(String[] projet) {
	WebContext webContextFact = WebContextFactory.get();
	HttpSession session = webContextFact.getSession();
	HttpServletRequest _request = webContextFact.getHttpServletRequest();

	List<Collaborateur> listCollaborateurProjet = (List<Collaborateur>) session.getAttribute("listCollaborateurSession");
	List<Projet> listProjets = (List) session.getAttribute("listProjetsSession");// Ne sert pas.
	List<EquipeProjet> listEquipeProjet = (List) session.getAttribute("listEquipeProjetFiltresSession");
	String[][] listD2= new String[2][listCollaborateurProjet.size()+1];
	int k=0;

	if(projet[0].equals("")){// On charge la liste des collaborateurs f(projet)
		for(int i=0;i<listCollaborateurProjet.size();i++){
			Collaborateur d = listCollaborateurProjet.get(i);
			listD2[0][k]=d.getId().toString();
			listD2[1][k]=d.getCollPatronyme()+" "+d.getCollPrenom();
			k++;
		}
	}
	else{
		int projetInt;
		for(int index=0;index<projet.length;index++){
			projetInt = Integer.parseInt(projet[index]);
			for(int i=0;i<listEquipeProjet.size();i++){
				if((listEquipeProjet.get(i).getProjet().getId()== projetInt)){

					Collaborateur d = listEquipeProjet.get(i).getCollaborateur();
					listD2[0][k]=d.getId().toString();
					listD2[1][k]=d.getCollPatronyme()+" "+d.getCollPrenom();
					k++;
				}
			}
		}
	}
	String[][] list = new String[2][k];

	int cont=0;
	for(int i=0;i<k;i++){

		list[0][cont]=listD2[0][i];
		list[1][cont]=listD2[1][i];
		cont++;
	}
	return list;
}



// Test :
/*
Notes :
collaborateurMultiSelect = id/multiselect collaborateur.
projetMultiSelect = .../multiselect projets.
data/getCollaborateursParListProjets = param/call back fonction, = donc response/jQAjax.
On construit donc data via serveur, java f(projet) -> qui est l'autre param de la fonction utilisé pour le call back.
	D'après cette fonction en js, doit être de la forme : String[id collaborateur][nom + prenom]
*/
function getCollaborateursParProjet() {
	var projet = dwr.util.getValue('projetMultiSelect'); // = id projet
	console.log(projet);
	var collaborateur = dwr.util.getValue('collaborateurMultiSelect');// array nulle ???
	console.log(collaborateur);
	if(projet==""){
		document.getElementById("collaborateurMultiSelect").value="";
	}

	AjaxDependentComboBoxFormation.getCollaborateursParListProjets(projet , function(data) {
		console.log("projet = " + projet + ", data = " + data);
		document.getElementById("collaborateurMultiSelect").length=data[0].length+1;
		var cnt=0;
		if(data!=null){// On rempli double array collaborateur f(data, response)
			for(i=0;i<data[0].length;i++){
				document.getElementById("collaborateurMultiSelect")[i+1].value=data[0][i];//id
				document.getElementById("collaborateurMultiSelect")[i+1].text=data[1][i];// nom, prenom
				cnt++;
			}
			document.getElementById("collaborateurMultiSelect").length=cnt+1;
			document.getElementById("collaborateurMultiSelect").value=collaborateur;
		}
	});
}

// Fonction dans ctrler, test :
public String[][] getCollaborateursParListProjets(String[] projet) {
	WebContext webContextFact = WebContextFactory.get();
	HttpSession session = webContextFact.getSession();
	HttpServletRequest _request = webContextFact.getHttpServletRequest();

	List<Collaborateur> listCollaborateurProjet = (List<Collaborateur>) session.getAttribute("listCollaborateurSession");
	//List<Projet> listProjets = (List) session.getAttribute("listProjetsSession");
	List<EquipeProjet> listEquipeProjet = (List) session.getAttribute("listEquipeProjetFiltresSession");
	String[][] listD2= new String[2][listCollaborateurProjet.size()+1];// = liste data, response a passer au js.
	int k=0;

	if(projet[0].equals("")){// Si pas de valeur déclarée (en fait = all), -> On charge la liste de ts les collaborateurs f(projet)
		for(int i=0;i<listCollaborateurProjet.size();i++){
			Collaborateur d = listCollaborateurProjet.get(i);
			listD2[0][k]=d.getId().toString();
			listD2[1][k]=d.getCollPatronyme()+" "+d.getCollPrenom();
			k++;
		}
	}
	else{// Si pas all, en tenant compte eventuellement du multiselect/projets.
		int projetInt;
		for(int index=0;index<projet.length;index++){
			projetInt = Integer.parseInt(projet[index]);
			for(int i=0;i<listEquipeProjet.size();i++){
				if((listEquipeProjet.get(i).getProjet().getId()== projetInt)){

					Collaborateur d = listEquipeProjet.get(i).getCollaborateur();
					listD2[0][k]=d.getId().toString();
					listD2[1][k]=d.getCollPatronyme()+" "+d.getCollPrenom();
					k++;
				}
			}
		}
	}

	String[][] list = new String[2][k];// On définit ce que l'on va retourner, note importante : le 2 -> num element. Ici, on dit donc que list peut se diviser en 2, en array de ids et arrays de nom, prenom/collaborateurs.

	int cont=0;
	for(int i=0;i<k;i++){

		list[0][cont]=listD2[0][i];
		list[1][cont]=listD2[1][i];
		cont++;
	}
	return list;
}
