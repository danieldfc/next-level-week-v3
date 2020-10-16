import axios from 'axios';

const api = axios.create({
  baseURL: 'http://IP_DA_MAQUINA:3333',
});

// emulador ios: http://localhost:3333

// executar se estiver no android: $ adb reverse tcp:3333 tcp:3333
// daí pode usar o http://localhost:3333, caso não:
// emulador android studio -> http://10.0.2.2:3333
// emulador android gennymotion -> http://10.0.3.2:3333
// ou se nada funcionar, utilize ip de sua máquina -> http://IP_DA_MAQUINA:3333

export default api;
