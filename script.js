var ul = document.getElementById('music-list');
var music = [
  {
  	title: "Yanagi Nagi →[ Toreiru ]",
      audioTruck: "https://docs.google.com/uc?export=download&id=17ZgnHRsUwj4vzJk9uzTBn63TtAx0jLLa"
  },
  {
  	title: "Roa - Beautiful Days [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16jJByhfI-yimD1VfQHwMPrUjjvjx0dFe"
  },{
  	title: "Roa - Fly High [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16rBOGq46jNCsR2Xxt7YHPLIEftUt0-gg"
  },{
  	title: "Roa - Focus [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=176U5Fhf2iqWwhMfDFeatTT9tslXAqaoE"
  },{
  	title: "Roa - Pineapple [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=17EzIbKaTpcDAM4r3FBKMoxB6gm54Ia_c"
  },
  {
  	title: "Roa - Endless Summer [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16mXnpbhJTol_H35xqgjpqhu22ROfXW85"
  }
];

for(var i=0; i<music.length; i++){
	
	var li, div, span, audio, source, a;
	
	li = document.createElement('li');
	div = document.createElement('div');
	a = document.createElement('a');
	span = document.createElement('span');
	audio = document.createElement('audio');
	source = document.createElement('source');
	
	div.setAttribute('class','play-con');
	span.setAttribute('id','title');
	audio.setAttribute('controls','controls');
	source.setAttribute('src','');
	a.setAttribute('href','#');
	
	span.textContent = music[i].title;
	source.src = music[i].audioTruck;
	
	audio.appendChild(source);
	div.appendChild(span);
	div.appendChild(audio);
	a.appendChild(div);
	li.appendChild(a);
	ul.appendChild(li);
	
	
}

 function myFunction() {
  
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('findmusic');
      filter = input.value.toUpperCase();
      ul = document.getElementById("music-list");
      li = ul.getElementsByTagName('li');

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().     indexOf(filter) > -1) {
          li[i].style.display = "block";
         } else {
          li[i].style.display = "none";
        }
      }
}