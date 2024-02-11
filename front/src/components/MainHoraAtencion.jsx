import "../Css/MainHoraAtencion.css"

const MainHoraAtencion = () => {
  return (
    <div>
        <div className="container-HA">
            <div className="vacioHA">

            </div>
          <div className="encabezado">
            <h1>Horarios de Atencion</h1>
          </div>
            <br />

            <div className="Tablas">
                    <div className="tabla1">
                        <h2>Hospital de San Pablo</h2>
                        <h3>GUARDIAS DE LUNES A DOMINGOS</h3>
                        <table>
                            <tr>
                                <th>Especialidad</th>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td>Clinico</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 18:00</td>
                            </tr>
                            <tr>
                                <td>Oftalmologia</td>
                                <td>Jueves</td>
                                <td>12:30 a 16:00</td>
                            </tr>
                            <tr>
                                <td>Psicologia</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                            <tr>
                                <td>Odontologia</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 19:00</td>
                            </tr>
                            <tr>
                                <td>Endocrinologia</td>
                                <td>Lunes, Martes, Miercoles y Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                            <tr>
                                <td>Kinesiolgia</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                            <tr>
                                <td>Nutricion</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                            <tr>
                                <td>Pediatria</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 19:00</td>
                            </tr>
                            <tr>
                                <td>Ginecologia</td>
                                <td>Lunes, Miercoles y Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                            <tr>
                                <td>Radiologia</td>
                                <td>Lunes a Viernes</td>
                                <td>08:00 a 17:00</td>
                            </tr>
                            <tr>
                                <td>Ecografias</td>
                                <td>Lunes, Martes, Jueves y Viernes</td>
                                <td>08:00 a 13:00</td>
                            </tr>
                        </table>
                    </div>
                    <div className="tabla1">
                        <h3>CAPS Nuestra Señora del Pilar</h3>
                        <table>
                            <tr>
                                <th>Especialidad</th>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div className="tabla1">
                        <h3>CAPS La Nueva Esperanza</h3>
                        <table>
                            <tr>
                                <th>Especialidad</th>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div className="tabla1">
                        <h3>CAPS Villa del Rosario</h3>
                        <table>
                            <tr>
                                <th>Especialidad</th>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
            
            </div>

        </div>
    </div>
  )
}

export default MainHoraAtencion