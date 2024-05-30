var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hallar el promedio ponderado',
        see: false,
        
        credito: {
            progra: 5,
            desarro: 4,
            base: 5,
            ingSoft: 4
        },
        progra: 0,
        desarro: 0,
        base: 0,
        ingSoft: 0,
        promedio: {
            progra: 0,
            desarro: 0,
            base: 0,
            ingSoft: 0
        },
        promPon: {
            final: 0,
            mensaje:''
        }
    },
    methods: {
        calcularPromedioFinal: function() {
            let totalCreditos = 0;
            let totalPonderado = 0;
            
            for (let key in this.promedio) {
                totalCreditos += this.credito[key];
                totalPonderado += this.promedio[key];
            }
            
            this.promPon.final = totalPonderado / totalCreditos;
            if(this.promPon.final>=11){
                this.promPon.mensaje = "APROBADO"
            }
            else {
                this.promPon.mensaje="DESAPROBADO"
            }
        },
        calcularPromP: function() {            
            this.promedio.progra = this.progra * this.credito.progra;
            this.calcularPromedioFinal();
        },
        calcularPromDW: function() {
            this.promedio.desarro = this.desarro * this.credito.desarro;
            this.calcularPromedioFinal();
        },
        calcularPromBD: function() {
            this.promedio.base = this.base * this.credito.base;
            this.calcularPromedioFinal();
        },
        calcularPromIS: function() {
            this.promedio.ingSoft = this.ingSoft * this.credito.ingSoft;
            this.calcularPromedioFinal();
        }
    }
})