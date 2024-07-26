import "../Css/MainHoraAdm.css"

const MainHoraAdm = () => {
  return (
    <div>
        <div className="container-HA">
            <div className="vacioHA">

            </div>
          <div className="encabezado">
            <h1>Horarios de Administracion</h1>
          </div>
            <br />

            <div className="Tablas">

                <div data-aos="fade-right">
                    <div className="tabla1">
                        <h2>Hospital de San Pablo</h2>

                        <table>

                            <tr>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td>Lunes a Viernes</td>
                                <td>07:00 a 19:00</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div data-aos="fade-left">
                    <div className="tabla1">
                        <h3>CAPS Nuestra Señora del Pilar</h3>
                        <table>
                            <tr>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div data-aos="fade-right">
                    <div className="tabla1">
                        <h3>CAPS La Nueva Esperanza</h3>
                        <table>
                            <tr>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                        </table>
                    </div>
                </div>

                <div data-aos="fade-left">
                    <div className="tabla1">
                        <h3>CAPS Villa del Rosario</h3>
                        <table>
                            <tr>
                                <th>Dias</th>
                                <th>Horarios</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default MainHoraAdm