/*VO*/
function getCollaborateursParProjet() {
	//console.log("fonction OK");
	if(document.getElementById("collaborateurList").disabled==false){
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

Notes :
collaborateurList = id/multiselect collaborateur.
