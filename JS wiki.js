$(document).ready(function(){
	var sboxVal = "";
	var urlApi = "";
	

	function randWiki(){
		window.open("https://en.wikipedia.org/wiki/Special:Random");
	}

	function searchWiki(){
		$.ajax({
			url: urlApi,
			dataType: 'jsonp',
			success: function(data){
				console.log(data);
				document.getElementById("results").innerHTML = "";
				for (var i = 0;i<10;i++){
					document.getElementById("results").innerHTML += "<div class='well items'><a target='_blank' href='" 
					+data[3][i]+ "'><strong class='item'>"+data[1][i]+"</strong></a><div>" + data[2][i]+"</div></div>";
				}				
			}
		});
	}

	function x(){
		sboxVal = document.getElementById("searchBox").value;
		urlApi = "https://en.wikipedia.org//w/api.php?action=opensearch&search=" + sboxVal + "&format=json&callback=?";
		//console.log(sboxVal, urlApi);

		if (sboxVal == ""){
			return randWiki();
		}
		else {
			return searchWiki();
		}
	}

	document.getElementById("searchBtn").addEventListener("click",x);

});