import { useState, useEffect } from 'react';

/**
 * Hook para simular estados de carga
 * @param {number} duration - Duración de la carga en milisegundos
 * @returns {boolean} - Estado de carga
 */
const useLoading = (duration = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const reload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, duration);
  };

  return { loading, reload };
};

export default useLoading;

