

function calcular(){
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    document.getElementById('fecha').innerHTML=hoy+"-"+mesActual+"-"+añoActual;
}
function salir(){
location.href = "Proyecto.html";
}
function rehIng(){
    location.href="InterfazderegistroClix.html"
}
function rehGas(){
    location.href="InterfazderegistroProv.html"
}
/*
function total(){
    var iva = document.getElementById('IVA').value;
    var ivaRetenido =document.getElementById('IVA_Retenido').value;
    var isr = document.getElementById('ISR_Retenido').value;
    var total = 0;
    total=iva+ivaRetenido+isr;

    document.getElementById('total_ingresos').value = total;
}*/
/*function total(){
    var iva = parseInt(document.getElementById("IVA").value);
    var ivaRetenido = parseInt(document.getElementById("IVA_Retenido").value);
    var isr = parseInt(document.getElementById("ISR_Retenido").value);
    var subtotal = parseInt(document.getElementById('subtotal').value);
    var total = subtotal;
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    if (total!=0) {
        document.getElementById("total_ingre").value = total;
        total1 = total + iva;
    } else if (total<total1) {
        document.getElementById("total_ingre").value = total2;
        total2 = total1 + ivaRetenido;
    } else if (total1<total2) {
        document.getElementById("total_ingre").value = total2;
        total3 = total1 + isr;
        alert(total3);
    }
}*/

function total(){

    var iva = parseInt(document.getElementById("IVA").value);

    var ivaRetenido = parseInt(document.getElementById("IVA_Retenido").value);

    var isr = parseInt(document.getElementById("ISR_Retenido").value);

    var subtotal = parseInt(document.getElementById('subtotal').value);

    var total = subtotal;

    var total1 = 0;

    var total2 = 0;

    var total3 = 0;

    if (total!=0) {

        document.getElementById("total_ingre").value = total;

        total1 = total + iva;

    } if (total<total1) {

        document.getElementById("total_ingre").value = total1;

        total2 = total1 + ivaRetenido;

    }if (total1<total2) {

        document.getElementById("total_ingre").value = total2;

        total3 = total2 + isr;

    }if(total2<total3)

    document.getElementById("total_ingre").value = total3;

}


function totalGastos(){

    var gastosTotal= parseFloat(document.getElementById('gastos_totales').value);

    var iva= parseFloat(document.getElementById('IVA').value);

    var iva16 = 0;

    var tasa= 0;

    var total = gastosTotal;

    var total1 =0;

    if(total!=0){

        document.getElementById('total_gas').value=total;

        total1 =total+iva;

        iva16=iva/0.16;

        tasa= gastosTotal-iva16;

    }if(total<total1){

        document.getElementById('tasa_16').value=iva16.toFixed(2);

        document.getElementById('tasa_0').value=tasa.toFixed(2);

        document.getElementById('total_gas').value=total1;  

    }

       

}

