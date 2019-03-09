function A_Z(id) {
            var id = document.getElementById(id);
            var list = id.getElementsByTagName('li');
            var new_list= [];
            for (var i=0, l=list.length; i<l; i++) {
                new_list.push(list[i].innerHTML);
            }
            
            new_list.sort();
            for (var i=0, l=list.length; i<l; i++) {
                list[i].innerHTML = new_list[i];
            }
        }
        function Z_A(id) {
            var id = document.getElementById(id);
            var list = id.getElementsByTagName('li');
            var new_list= [];
            for (var i=0, l=list.length; i<l; i++) {
                new_list.push(list[i].innerHTML);
            }
            
            new_list.sort();
            new_list.reverse();
            
            for (var i=0, l=list.length; i<l; i++) {
                list[i].innerHTML = new_list[i];
            }
        }


function initMap() {
        var uluru = {lat: 44.79886, lng: 20.46729};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

function Computer(name, manufacturer, price, processor, chipset, memory, storage, graphicCard) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
    this.processor = processor;
    this.chipset = chipset;
    this.memory = memory;
    this.storage = storage;
    this.graphicCard = graphicCard;
}

var dell = new Computer('Dell..','Dell',300 + '\u20AC', '\E005');

var ss = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;