import React from "react";
import { Link } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";
import { FiPlus } from "react-icons/fi";

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estõ esperando a sua visita {":)"}</p>
        </header>

        <footer>
          <strong>Conselheiro Lafaiete</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
