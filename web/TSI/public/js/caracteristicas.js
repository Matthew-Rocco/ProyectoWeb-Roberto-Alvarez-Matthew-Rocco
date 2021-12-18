document.querySelector("#tipocomp-select").addEventListener("change", async() => {
    let carac = document.querySelector("#carac");
    let tiposelec = document.querySelector("#tipocomp-select").value;
    carac.innerHTML = "";
    const caraccuerpo = document.createElement("div");
    if (tiposelec == 1) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="fforma-txt" class="form-label">Factor de Forma</label>
                                    <input type="text" class="form-control" id="fforma-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="bahias-txt" class="form-label">Bahias</label>
                                    <input type="text" class="form-control" id="bahias-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="ventinc-txt" class="form-label">Ventiladores Incorporados</label>
                                    <input type="number" min="0"  class="form-control" id="ventinc-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="espvent-txt" class="form-label">Espacios para Ventilador</label>
                                    <input type="text" class="form-control" id="espvent-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="fuentepi-txt" class="form-label">Fuente de Poder Incluida</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="fuentep-radio" id="si">
                                        <label class="form-check-label" for="si"> Si </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="fuentep-radio" id="no" checked>
                                        <label class="form-check-label" for="no"> No </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Dimensiones</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="text" class="form-control" id="dim-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Peso</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0"  class="form-control" id="peso-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label for="peso-txt" class="form-label">kg</label>
                                        </div>
                                    </div>
                                </div>
    `
    } else if (tiposelec == 2) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="platform-radio" class="form-label">Plataforma</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="platform-radio" id="intel"
                                            checked>
                                        <label class="form-check-label" for="intel"> Intel </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="platform-radio" id="amd">
                                        <label class="form-check-label" for="amd"> AMD </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="fforma-txt" class="form-label">Factor de Forma</label>
                                    <input type="text" class="form-control" id="fforma-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="socket-txt" class="form-label">Socket</label>
                                    <input type="text" class="form-control" id="socket-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="salidas-txt" class="form-label">Salida de Video</label>
                                    <input type="text" class="form-control" id="salida-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="conectores-txt" class="form-label">Conectores</label>
                                    <input type="number" min="0" class="form-control" id="conectores-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="slotmem-txt" class="form-label">Slots de Memoria</label>
                                    <input type="number" min="0"  class="form-control" id="slotmem-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="tipomem-txt" class="form-label">Tipo de Memoria</label>
                                    <input type="text" class="form-control" id="tipomem-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="maxmem-txt" class="form-label">Maximo de Memoria</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0"  class="form-control" id="maxmem-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">GB</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="velocidad-txt" class="form-label">Velocidad Soportada</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="velocidad-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">MHz</label>
                                        </div>
                                    </div>
                                </div>   
                                <div class="mb-3">
                                    <label for="almacenamiento-txt" class="form-label">Almacenamiento</label>
                                    <input type="text" class="form-control" id="almacenamiento-txt">
                                </div>
        `
    } else if (tiposelec == 3) {
        let cuerpo = document.createElement("div")
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="platform-radio" class="form-label">Plataforma</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="platform-radio" id="intel"
                                            checked>
                                        <label class="form-check-label" for="intel"> Intel </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="platform-radio" id="amd">
                                        <label class="form-check-label" for="amd"> AMD </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="velocidad-txt" class="form-label">Velocidad</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="velocidad-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">Ghz</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="consumo-txt" class="form-label">Consumo</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="consumo-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">W</label>
                                        </div>
                                    </div>
                                </div> 
                                <label for="gpui-radio" class="form-label">GPU integrada</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gpui-radio" id="si">
                                    <label class="form-check-label" for="si"> si </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gpui-radio" id="no" checked>
                                    <label class="form-check-label" for="no"> no </label>
                                </div>
                                <div class="mb-3">
                                    <label for="mgpu-txt" class="form-label">Modelo de GPU </label>
                                    <input type="text" class="form-control" id="mgpu-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="fgpu-txt" class="form-label">Frecuencia de GPU</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0"  class="form-control" id="fgpu-txt">
                                        </div>
                                        <div class="col col-md col-lg pe-0">
                                            <label class="form-label">MHz</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="cnucleos-txt" class="form-label">Cantidad de Nucleos </label>
                                    <input type="number" min="0" class="form-control" id="cnucleos-txt">
                                </div>
        `
    } else if (tiposelec == 4) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="gpu-radio" class="form-label">GPU</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gpu-radio" id="nvidia"
                                            checked>
                                        <label class="form-check-label" for="nvidia"> NVIDIA </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gpu-radio" id="amd">
                                        <label class="form-check-label" for="amd"> AMD </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="mgpu-txt" class="form-label">Modelo de GPU </label>
                                    <input type="text" class="form-control" id="mgpu-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="tipomem-txt" class="form-label">Tipo de Memoria</label>
                                    <input type="text" class="form-control" id="tipomem-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="cantmem-txt" class="form-label">Cantidad de Memoria</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="cantmem-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">GB</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="velocidadmem-txt" class="form-label">Velocidad de Memoria</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="velocidadmem-txt">
                                        </div>
                                        <div class="col col-md col-lg pe-0">
                                            <label class="form-label">Gbps</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="salida-txt" class="form-label">Salida de Video</label>
                                    <input type="text" class="form-control" id="salida-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="tamañot-txt" class="form-label">Tamaño de Tarjeta</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="tamañot-txt">
                                        </div>
                                        <div class="col col-md col-lg pe-0">
                                            <label class="form-label">Slots</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="consumo-txt" class="form-label">Consumo</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="consumo-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">W</label>
                                        </div>
                                    </div>
                                </div>   
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Dimensiones</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="text" class="form-control" id="dim-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>   
        `
    } else if (tiposelec == 5) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="tipoa-radio" class="form-label">Tipo de Almacenamiento</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tipoal-radio" id="ssd"
                                            checked>
                                        <label class="form-check-label" for="ssd"> SSD </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tipoal-radio" id="hdd">
                                        <label class="form-check-label" for="hdd"> HDD </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="capacidad-txt" class="form-label">Capacidad</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="capacidad-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">GB</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="interfaz-txt" class="form-label">Interfaz </label>
                                    <input type="text" class="form-control" id="interfaz-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="facform-txt" class="form-label">Factor de forma</label>
                                    <input type="text" class="form-control" id="facform-txt">
                                </div>    
        `
    } else if (tiposelec == 6) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="formfuente-txt" class="form-label">Formato </label>
                                    <input type="text" class="form-control" id="formfuente-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="potfuente-txt" class="form-label">Potencia</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="potfuente-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">W</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="tamvent-txt" class="form-label">Tamaño Ventilador</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="tamvent-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="dim-txt" class="form-label">Dimensiones</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="text" class="form-control" id="dim-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="conectores-txt" class="form-label">Conectores</label>
                                    <input type="text" class="form-control" id="conectores-txt">
                                </div>
        `
    } else if (tiposelec == 7) {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="tiporam-txt" class="form-label">Tipo de RAM </label>
                                    <input type="text" class="form-control" id="tiporam-txt">
                                </div>
                                <div class="mb-3">
                                    <label for="capram-txt" class="form-label">Capacidad</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="capram-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">GB</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="frecram-txt" class="form-label">Frecuencia de RAM</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="frecram-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">MHz</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="disipador-radio" class="form-label">Disipador de Calor</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="disipador-radio" id="si">
                                        <label class="form-check-label" for="si"> Si </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="disipador-radio" id="no" checked>
                                        <label class="form-check-label" for="no"> No </label>
                                    </div>
                                </div>
        `
    } else {
        caraccuerpo.innerHTML = `
                                <div class="mb-3">
                                    <label for="tamaño-txt" class="form-label">Tamaño</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="tamaño-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="grosor-txt" class="form-label">Grosor</label>
                                    <div class="row">
                                        <div class="col-10 col-md-10 col-lg-10 pe-0">
                                            <input type="number" min="0" class="form-control" id="grosor-txt">
                                        </div>
                                        <div class="col col-md col-lg">
                                            <label class="form-label">mm</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="cantidad-txt" class="form-label">Cantidad</label>
                                    <input type="number" min="0" class="form-control" id="cantidad-txt">
                                </div>
        `
    }

    carac.appendChild(caraccuerpo);
});