(function() {
  // Elementos del DOM
  const rollBtn = document.getElementById('rollBtn');
  const result = document.getElementById('result');
  const countdown = document.getElementById('countdown');
  const accountDisplay = document.getElementById('account');

  // Constantes
  const STORAGE_PREFIX = 'flujo';

  // Lista de cuentas
  const accounts = [
    'usuario : TE DIJE NO VENTA\ncontraseña : 11511474',
    'usuario : cw2w0g0v1418832\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 33164c67',
    'usuario : c94966x81418831\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : b77933b8',
    'usuario : c55nhmbn1418828\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 5510aa36',
    'usuario : c9288d611418469\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : darkar07',
    'usuario : c8ja8b021418471\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 62702a09',
    'usuario : cwy1tr341417915\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 46772123',
    'usuario : c40xd6ug1417906\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 23259692',
    'usuario : cy3r9c3k1417908\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : kechimbo',
    'usuario : c48ks9co1417907\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : b1368a8b',
    'usuario : c427h0s81417913\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : a7b92604',
    'usuario : cox48z5y1417867\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 69431505',
    'usuario : c759q15p1417856\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 26109a68',
    'usuario : c5dxc9pr1417565\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 49965967',
    'usuario : crsbz67j1417385\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : britney2020',
    'usuario : cj8029r01417028\ncontraseña : TE DIJE NO VENTA',
    'usuario : c39ks9pk1417029\ncontraseña : matias28',
    'usuario : TE DIJE NO VENTA\ncontraseña : TE DIJE NO VENTA',
    'usuario : c5a9nvny1417026\ncontraseña : 41448aa7',
    'usuario : TE DIJE NO VENTA\ncontraseña : TE DIJE NO VENTA',
    'usuario : cj1mvr541416814\ncontraseña : 1b085462',
    'usuario : TE DIJE NO VENTA\ncontraseña : TE DIJE NO VENTA',
    'usuario : czg167811416589\ncontraseña : 38719360',
    'usuario : c04cy11f1416582\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 55a48338',
    'usuario : cfj02w141416583\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 08112a69',
    'usuario : c58o9r9j1416586\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 0907cb47',
    'usuario : c41850611416588\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 8309c684',
    'usuario : c2cgrzy21416585\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 05889457',
    'usuario : ck5e8smb1416103\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 96690229',
    'usuario : c9js05891416106\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 0b96a545',
    'usuario : c79btgu91416107\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 935569a9',
    'usuario : c9ys2r0e1416098\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : a2c31686',
    'usuario : c7un07mw1416099\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 39911263',
    'usuario : cj28av121416062\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : Lueh0302',
    'usuario : c0ys03521415292\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 3784061a',
    'usuario : c8yxtod71415293\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 59072170',
    'usuario : ch0v0rq91415047\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 87a8ba47',
    'usuario : c73293r81414882\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 848b116a',
    'usuario : cyr3b7wr1414874\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 2617142025',
    'usuario : c0y5ts341414875\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 292480c0',
    'usuario : ct70xr5y1414502\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 19760927',
    'usuario : c73306861414192\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : fargot0988',
    'usuario : crx659541413732\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 49361085',
    'usuario : cj7wvbe11413564\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : c3561637',
    'usuario : cv0v74j11413566\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : iu8iikikh',
    'usuario : cyrm00th1413518\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 43363645',
    'usuario : cf7ctf311412954\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : FlujoTv891',
    'usuario : cyf37s3y1412899\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 04530841',
    'usuario : c7600em71412708\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : sp87466433',
    'usuario : cgawqy3u1412344\ncontraseña : saltos3dumas2',
    'usuario : TE DIJE NO VENTA\ncontraseña : 96991225',
    'usuario : c951vsu61411928\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : ccmj2325',
    'usuario : c6w6215o1411183\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 339383a1',
    'usuario : c242cje81410972\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 1b062109',
    'usuario : c936xd6t1410366\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : a1987389',
    'usuario : c2m39enn1410363\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 19861b40',
    'usuario : cfe29r0f1410244\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : magis0803',
    'usuario : cobvxt1z1410119\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : magis1747',
    'usuario : c47os3m21409805\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : 48204884',
    'usuario : ckkn5a7c1408775\ncontraseña : TE DIJE NO VENTA',
    'usuario : TE DIJE NO VENTA\ncontraseña : FlujotvCar591',
    'usuario : TE ACABAN DE ESTAFAR\ncontraseña : TE DIJE NO VENTA'
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
