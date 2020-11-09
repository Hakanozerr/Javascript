function DovizCevir() {
    $.ajax({
        type: "GET",
        url: "http://www.tcmb.gov.tr/kurlar/today.xml",
        dataType: "xml",

        success: function(e){
                
            var miktar = document.getElementById("miktar").value;
            var kod = document.getElementById("kod").value; 

            switch(kod){
                case "USD": var USD = $("Currency > ForexSelling",e).eq(0).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / USD) + " $"; break;
                case "AUD": var AUD = $("Currency > ForexSelling",e).eq(1).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / AUD) + " AU$"; break;
                case "DKK": var DKK = $("Currency > ForexSelling",e).eq(2).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / DKK) + " DKK"; break;
                case "EUR": var EUR = $("Currency > ForexSelling",e).eq(3).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / EUR) + " €"; break;
                case "GBP": var GBP = $("Currency > ForexSelling",e).eq(4).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / GBP) + " £"; break;
                case "CHF": var CHF = $("Currency > ForexSelling",e).eq(5).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / CHF) + " CHF"; break;
                case "SEK": var SEK = $("Currency > ForexSelling",e).eq(6).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / SEK) + " KR"; break;
                case "CAD": var CAD = $("Currency > ForexSelling",e).eq(7).text();
                document.getElementById("HesapSonuc").innerHTML = (miktar / CAD) + "C$"; break;
            }
        } 
    })
}