import React from 'react'

export default function Footer() {
  return (
    <div class="container">
          <div class="a_propos">
            <hr></hr>
              <p><span>A propos</span></p>
              <a href="#">
                  <p>Fonctionnement du site</p>
              </a>
              <a href="#">
                  <p>Conditions générales de vente</p>
              </a>
              <a href="#">
                  <p>Données et confidentialité</p>
              </a>
          </div>
          <div class="nos_hebergements">
            <hr></hr>
              <p><span>Nos hébergements</span></p>
              <a href="#">
                  <p>charte qualité</p>
              </a>
              <a href="#">
                  <p>Soumettre votre Location</p>
              </a>
          </div>
          <div class="Assist">
            <hr></hr>
              <p><span>Assistance</span></p>
              <a href="#">
                  <p>Centre d'aide</p>
              </a>
              <a href="#">
                  <p>Nous contacter</p>
              </a>
          </div>
      </div>
  )
}
