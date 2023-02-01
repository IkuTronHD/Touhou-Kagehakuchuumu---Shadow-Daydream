function init() {
	insert_common();
	change_image();
	welcome_image();
	create_contents();
}

function insert_common() {
	var _header = document.getElementById("header");
	_header.innerHTML = "\
	<a href=\"./index.html\">\
		<img src=\"./img/title.png\" alt=\"Touhou X Wiki\">\
	</a>\
	<div id=\"toolbar\">\
			<div style=\"float:left;\">\
				<a href=\"./index.html\" style=\"color:#FFFFFF;\">Selección de Personajes</a>\
				<img id=\"tooltip1\" src=\"./img/face1.png\">　　\
				<img id=\"tooltip2\" src=\"./img/face2.png\">　　\
				<img id=\"tooltip3\" src=\"./img/face3.png\">　　\
				<img id=\"tooltip4\" src=\"./img/face4.png\">　　\
				<img id=\"tooltip5\" src=\"./img/face5.png\">　　\
				<img id=\"tooltip6\" src=\"./img/face6.png\">　　\
				<img id=\"tooltip7\" src=\"./img/face7.png\">　　\
				<img id=\"tooltip8\" src=\"./img/face8.png\">\
			</div>\
		<div style=\"float:right;\">\
			<input type=\"submit\" value=\"Cambiar Imágen\" onClick=\"change_image()\">\
		</div>\
		<br>\
	</div>";
	
	var _leftregion = document.getElementById("left-region");
	_leftregion.innerHTML = "\
	<div class=\"content1\">Introducción</div>\
	<ul class=\"page-list\">\
		<li><a href=\"https://mega.nz/file/pFliGYqL#bo3kGYajd2dAG5do5OdEvqIMlZBd_8YjfDqJn9Pz7Vk\">Link del Juego</a></li>\
		<li><a href=\"./what.html\">¿Qué Es Esto?</a></li>\
		<li><a href=\"./caution.html\">Notas</a></li>\
		<li><a href=\"./thanks.html\">Gratitud</a></li>\
	</ul>\
	<div class=\"content1\">Otros</div>\
	<ul class=\"page-list\">\
		<li><a href=\"./qanda.html\">Preguntas y Respuestas</a></li>\
		<li><a href=\"./contact.html\">Dirección de Contacto</a></li>\
		<li><a href=\"./revision.html\">Notas de Actualizaciónes</a></li>\
	</ul>\
	";
	
	var _footer = document.getElementById("footer");
	_footer.innerHTML = "Distribuido por IkuTronHD"
}

function change_image() {
	var image = new Array(21);
	var i = 0;
	for (i = 0;i < 21;i++) {
		image[i] = i + 1;
	}
	var l = 21;
	var a = image.concat();
	var r = [];
	while(l) r.push(a.splice(Math.floor(Math.random() * l--), 1));
	for (i = 0;i < 8;i++) {
		document.all.item("tooltip" + (i + 1)).src = "./img/face" + r[i] + ".png";
	}
}

function welcome_image() {
	if (document.all.welcome) {
		var image = [
			["welcome01.png","!Bienvenidosss!"]
		];
		var rand = Math.floor(Math.random() * image.length);
		var select = image[rand];
		document.all.welcome.src = "./img/" + select[0];
		document.all.welcome.alt = select[1];
	}
}

function create_contents() {

	function create_ul() {
		var ul = document.createElement("ul");
		ul.className = parseInt(list[index].tagName.charAt(1));
		var j = 0;
		while(1) {
			var lv1 = parseInt(list[index].tagName.charAt(1));
			var lv2 = lv1;
			if (ul.childNodes.length > 0) lv2 = parseInt(ul.className);
			if (lv1 == lv2) {
				list[index].id = "content" + index;
				var aa = document.createElement("a");
				aa.href = "#content" + index;
				aa.innerHTML = list[index].innerHTML;
				var li = document.createElement("li");
				li.className = lv1;
				li.appendChild(aa);
				ul.appendChild(li);
				index++;
			} else if (lv1 > lv2) {
				ul.appendChild(create_ul());
			} else 	if (lv1 < lv2) {
				return ul;
			}
			if (index >= list.length) {
				return ul;
			}
		}
	}

	var index = 0;
	var list = document.getElementById("right-region").querySelectorAll("h2,h3,h4");
	var con = document.all.contents;
	
	if (con && list) {
		con.appendChild(create_ul());
	}
	return;
}

function hide_contents(obj) {
	var sib = obj.nextSibling;
	while (sib.nodeType != 1 && sib !=  null) {
		sib = sib.nextSibling;
	}
	if (obj.innerText) {
		if (obj.innerText == "+") {
			obj.innerText = "-";
		} else {
			obj.innerText = "+";
		}
	}
	if (sib.style) {
		if (sib.style.display == "none") {
			sib.style.display = "block";
		} else {
			sib.style.display = "none";
		}
	}
}