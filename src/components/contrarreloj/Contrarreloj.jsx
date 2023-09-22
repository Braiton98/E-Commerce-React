import React, { useEffect, useState } from 'react';

export function Countdown() {
  // Constantes
  const DATE_TARGET = new Date('09/29/2023 0:01 AM');
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

  // Estados para almacenar los valores del contador
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  // Función para actualizar el contador
  function updateCountdown() {
    const now = new Date();
    const duration = DATE_TARGET - now;
    const days = Math.floor(duration / MILLISECONDS_OF_A_DAY);
    const hours = Math.floor((duration % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const minutes = Math.floor((duration % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const seconds = Math.floor((duration % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    setRemainingDays(days);
    setRemainingHours(hours);
    setRemainingMinutes(minutes);
    setRemainingSeconds(seconds);
  }

  // Iniciar el contador cuando se carga el componente
  useEffect(() => {
    updateCountdown();
    // Actualizar cada segundo
    const intervalId = setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <p>
        <span id="days">{remainingDays}</span> días / <span id="hours">{remainingHours}</span> horas /{' '}
        <span id="minutes">{remainingMinutes}</span> minutos / <span id="seconds">{remainingSeconds}</span> segundos
      </p>
    </section>
  );
}
