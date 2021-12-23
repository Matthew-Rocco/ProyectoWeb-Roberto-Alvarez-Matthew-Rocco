function guardarCaracComp(idcomp) {
    let tiposelec = document.querySelector("#tipocomp-select").value;
    let caraccomp = {};
    if (tiposelec == 1) {

        let fforma = document.querySelector("#fforma-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 1";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 1;
        caraccomp.valor_carac = fforma;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let bahias = document.querySelector("#bahias-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 2";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 2;
        caraccomp.valor_carac = bahias;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let ventinc = Number(document.querySelector("#ventinc-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 3";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 3;
        caraccomp.valor_carac = ventinc;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let espvent = document.querySelector("#espvent-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 4";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 4;
        caraccomp.valor_carac = espvent;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let fuentep;
        if (document.querySelector("#si").checked) {
            fuentep = "si";
        } else {
            fuentep = "no";
        };
        caraccomp.caract_comp = idcomp + " 5";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 5;
        caraccomp.valor_carac = fuentep;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let dim = document.querySelector("#dim-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 6";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 6;
        caraccomp.valor_carac = dim;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let peso = Number(document.querySelector("#peso-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 7";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 7;
        caraccomp.valor_carac = peso;
        caraccomp.unidad = "kg";
        crearCaracComp(caraccomp);
        caraccomp = {};


    } else if (tiposelec == 2) {
        let platform;
        if (document.querySelector("#intel").checked) {
            platform = "Intel";
        } else {
            platform = "AMD";
        };
        caraccomp.caract_comp = idcomp + " 8";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 8;
        caraccomp.valor_carac = platform;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let fforma = document.querySelector("#fforma-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 1";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 1;
        caraccomp.valor_carac = fforma;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let socket = document.querySelector("#socket-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 9";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 9;
        caraccomp.valor_carac = socket;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let salida = document.querySelector("#salida-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 10";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 10;
        caraccomp.valor_carac = salida;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let conectores = Number(document.querySelector("#conectores-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 11";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 11;
        caraccomp.valor_carac = conectores;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let slotmem = Number(document.querySelector("#slotmem-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 13";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 13;
        caraccomp.valor_carac = slotmem;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let tipomem = document.querySelector("#tipomem-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 14";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 14;
        caraccomp.valor_carac = tipomem;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let maxmem = Number(document.querySelector("#maxmem-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 15";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 15;
        caraccomp.valor_carac = maxmem;
        caraccomp.unidad = "GB";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let velocidad = Number(document.querySelector("#velocidad-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 16";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 16;
        caraccomp.valor_carac = velocidad;
        caraccomp.unidad = "MHz";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let almacenamiento = document.querySelector("#almacenamiento-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 17";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 17;
        caraccomp.valor_carac = almacenamiento;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

    } else if (tiposelec == 3) {

        let platform;
        if (document.querySelector("#intel").checked) {
            platform = "Intel";
        } else {
            platform = "AMD";
        };
        caraccomp.caract_comp = idcomp + " 8";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 8;
        caraccomp.valor_carac = platform;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let velocidad = Number(document.querySelector("#velocidad-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 18";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 18;
        caraccomp.valor_carac = velocidad;
        caraccomp.unidad = "Ghz";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let consumo = Number(document.querySelector("#consumo-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 19";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 19;
        caraccomp.valor_carac = consumo;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let gpui;
        if (document.querySelector("#si").checked) {
            gpui = "Si";
        } else {
            gpui = "No";
        };
        caraccomp.caract_comp = idcomp + " 20";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 20;
        caraccomp.valor_carac = gpui;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};


        let mgpu = document.querySelector("#mgpu-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 21";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 21;
        caraccomp.valor_carac = mgpu;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let fgpu = Number(document.querySelector("#fgpu-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 22";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 22;
        caraccomp.valor_carac = fgpu;
        caraccomp.unidad = "MHz";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let cnucleos = Number(document.querySelector("#cnucleos-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 23";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 23;
        caraccomp.valor_carac = cnucleos;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};


    } else if (tiposelec == 4) {

        let gpu;
        if (document.querySelector("#nvidia").checked) {
            gpu = "NVIDIA";
        } else {
            gpu = "AMD";
        };
        caraccomp.caract_comp = idcomp + " 24";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 24;
        caraccomp.valor_carac = gpu;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let mgpu = document.querySelector("#mgpu-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 21";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 21;
        caraccomp.valor_carac = mgpu;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let tipomem = document.querySelector("#tipomem-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 14";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 14;
        caraccomp.valor_carac = tipomem;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let cantmem = Number(document.querySelector("#cantmem-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 26";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 26;
        caraccomp.valor_carac = cantmem;
        caraccomp.unidad = "GB";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let velocidadmem = Number(document.querySelector("#velocidadmem-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 27";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 27;
        caraccomp.valor_carac = velocidadmem;
        caraccomp.unidad = "Gbps";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let salida = document.querySelector("#salida-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 10";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 10;
        caraccomp.valor_carac = salida;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let tamañot = Number(document.querySelector("#tamañot-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 30";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 30;
        caraccomp.valor_carac = tamañot;
        caraccomp.unidad = "Slots";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let consumo = Number(document.querySelector("#consumo-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 19";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 19;
        caraccomp.valor_carac = consumo;
        caraccomp.unidad = "W";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let dim = document.querySelector("#dim-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 6";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 6;
        caraccomp.valor_carac = dim;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};


    } else if (tiposelec == 5) {

        let tipoal;
        if (document.querySelector("#ssd").checked) {
            tipoal = "SSD";
        } else {
            tipoal = "HDD";
        };
        caraccomp.caract_comp = idcomp + " 31";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 31;
        caraccomp.valor_carac = tipoal;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let capacidad = Number(document.querySelector("#capacidad-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 32";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 32;
        caraccomp.valor_carac = capacidad;
        caraccomp.unidad = "GB";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let interfaz = document.querySelector("#interfaz-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 33";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 33;
        caraccomp.valor_carac = interfaz;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

    } else if (tiposelec == 6) {

        let formfuente = document.querySelector("#formfuente-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 34";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 34;
        caraccomp.valor_carac = formfuente;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let potfuente = Number(document.querySelector("#potfuente-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 35";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 35;
        caraccomp.valor_carac = potfuente;
        caraccomp.unidad = "W";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let tamvent = Number(document.querySelector("#tamvent-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 36";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 36;
        caraccomp.valor_carac = tamvent;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let dim = document.querySelector("#dim-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 6";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 6;
        caraccomp.valor_carac = dim;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let conectores = document.querySelector("#conectores-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 11";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 11;
        caraccomp.valor_carac = conectores;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};


    } else if (tiposelec == 7) {

        let tiporam = document.querySelector("#tiporam-txt").value.trim();
        caraccomp.caract_comp = idcomp + " 31";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 31;
        caraccomp.valor_carac = tiporam;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let capram = Number(document.querySelector("#capram-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 32";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 32;
        caraccomp.valor_carac = capram;
        caraccomp.unidad = "GB";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let frecram = Number(document.querySelector("#frecram-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 37";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 37;
        caraccomp.valor_carac = frecram;
        caraccomp.unidad = "MHz";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let disipador;
        if (document.querySelector("#si").checked) {
            disipador = "Si";
        } else {
            disipador = "No";
        };
        caraccomp.caract_comp = idcomp + " 29";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 29;
        caraccomp.valor_carac = disipador;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};


    } else {

        let tamaño = Number(document.querySelector("#tamaño-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 30";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 30;
        caraccomp.valor_carac = tamaño;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let grosor = Number(document.querySelector("#grosor-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 38";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 38;
        caraccomp.valor_carac = grosor;
        caraccomp.unidad = "mm";
        crearCaracComp(caraccomp);
        caraccomp = {};

        let cantidad = Number(document.querySelector("#cantidad-txt").value.trim());
        caraccomp.caract_comp = idcomp + " 39";
        caraccomp.cod_comp = idcomp;
        caraccomp.cod_carac = 39;
        caraccomp.valor_carac = cantidad;
        caraccomp.unidad = "vacio";
        crearCaracComp(caraccomp);
        caraccomp = {};
    }
}