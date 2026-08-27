(function() {
  // Elementos del DOM
  const rollBtn = document.getElementById('rollBtn');
  const result = document.getElementById('result');
  const countdown = document.getElementById('countdown');
  const accountDisplay = document.getElementById('account');

  // Constantes
  const STORAGE_PREFIX = 'deezer';

  // Lista de cuentas
  const accounts = [
    'Correo : jckj.lord@gmail.com\ncontraseña : Watashi2126',
	'Correo : davi.audi@hotmail.com\ncontraseña : 9412mancha',
    'Correo : al.exgsrukr@gmail.com\ncontraseña : @ugustinDE01',
    'Correo : Ttok2175@gmail.com\ncontraseña : ismail200',
    'Correo : erbenilsonferreira@gmail.com\ncontraseña : Nilson063@',
	'Correo : jucastilhosrosa@gmail.com\ncontraseña : 22122019',
    'Correo : sandrineadam1976@gmail.com\ncontraseña : Putain2mot2passe2merde',
	'Correo : dudasouza20018@gmail.com\ncontraseña : Edu1010#',
    'Correo : samuel.raco@icloud.com\ncontraseña : Samuel1103?',
    'Correo : anskar2031@gmail.com\ncontraseña : caixa9115',
    'Correo : erbenilsonferreira@gmail.com\ncontraseña : Nilson063@',
    'Correo : ahmedalkholy185@gmail.com\ncontraseña : ahmed123ali',
    'Correo : dear13@outlook.com\ncontraseña : Fifa1212',
    'Correo : Savanakraus19@outlook.be\ncontraseña : Savana-12',
    'Correo : sophie.malinge@wanadoo.fr\ncontraseña : audrey49',
    'Correo : federiconerilastrucci@gmail.com\ncontraseña : 12345678fede',
	'Correo : wellingtondiret@gmail.com\ncontraseña : waml5391120',
	'Correo : marquinho_viny157@hotmail.com\ncontraseña : mavi1734',
    'Correo : markus21f_m942x@hexud.com\ncontraseña : 7894561230'
  ];

  // Funciones de almacenamiento
  function getStorage(key, fallback) {
    const val = localStorage.getItem(`${STORAGE_PREFIX}_${key}`);
    return val !== null ? JSON.parse(val) : fallback;
  }

  function setStorage(key, value) {
    localStorage.setItem(`${STORAGE_PREFIX}_${key}`, JSON.stringify(value));
  }

  // Reiniciar cooldown (al ganar)
  function resetCooldown() {
    setStorage('cooldownUntil', null);
    setStorage('penalty', 0);
    setStorage('attempts', 3);
  }

  // Iniciar cooldown con penalización
  function startCooldown(minutes) {
    const until = Date.now() + minutes * 60 * 1000;
    setStorage('cooldownUntil', until);
    updateCountdown(until);
  }

  // Actualizar visualización de la cuenta regresiva
  function updateCountdown(until) {
    rollBtn.disabled = true;
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = until - now;
      if (diff <= 0) {
        clearInterval(interval);
        countdown.innerText = 'Ya puedes volver a lanzar.';
        rollBtn.disabled = false;
        setStorage('cooldownUntil', null);
      } else {
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        countdown.innerText = `Espera ${mins}m ${secs}s...`;
      }
    }, 1000);
  }

  // Inicialización
  function init() {
    const cooldownUntil = getStorage('cooldownUntil', null);

    if (cooldownUntil && Date.now() < cooldownUntil) {
      updateCountdown(cooldownUntil);
    } else {
      rollBtn.disabled = false;
      if (getStorage('attempts', 3) !== 3) {
        setStorage('attempts', 3);
      }
    }

    // Evento del botón
    rollBtn.addEventListener('click', function() {
      const roll = Math.floor(Math.random() * 6) + 1;
      result.innerText = `Has sacado un ${roll}`;

      if (roll === 6) {
        const account = accounts[Math.floor(Math.random() * accounts.length)];
        accountDisplay.innerText = `🎉 ¡Ganaste! Cuenta: ${account}`;
        resetCooldown();
        rollBtn.disabled = false;
        countdown.innerText = '';
      } else {
        accountDisplay.innerText = '❌ No ganaste esta vez.';
        let currentAttempts = getStorage('attempts', 3) - 1;
        if (currentAttempts <= 0) {
          let currentPenalty = getStorage('penalty', 0) + 5;
          setStorage('penalty', currentPenalty);
          setStorage('attempts', 3);
          startCooldown(currentPenalty);
        } else {
          setStorage('attempts', currentAttempts);
        }
      }
    });
  }

  // Ejecutar
  init();
})();