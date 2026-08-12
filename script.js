/* Configurações Globais */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    text-align: center;
}

header {
    background-color: #1e1e1e;
    padding: 30px 10px;
    border-bottom: 3px solid #ff4757;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

/* Container Principal */
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
}

/* Cartões de Conteúdo */
.card {
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 25px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    border: 1px solid #333;
}

/* Entradas e Botões */
input {
    width: 80%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #444;
    background-color: #2b2b2b;
    color: white;
    margin-bottom: 10px;
}

button {
    background-color: #ff4757;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

button:hover {
    background-color: #ff6b81;
}

.car-info {
    text-align: left;
    background: #2b2b2b;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
}
