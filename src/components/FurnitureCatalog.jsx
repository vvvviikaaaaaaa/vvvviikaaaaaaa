import React, { useState, useEffect } from "react";
import axios from "axios";

const FurnitureCatalog = () => {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dd7f03e546b90f04.mokky.dev/items")
      .then((response) => {
        // Проверяем структуру ответа и устанавливаем данные правильно
        const catalog = response.data[0]?.furnitureCatalog;
        setFurniture(catalog || []); // Устанавливаем пустой массив, если данных нет
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Каталог мебели</h1>
      <ul>
        {furniture.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} $
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FurnitureCatalog;
