// Registro del Service Worker para convertir la web en PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration.scope);
            })
            .catch((error) => {
                console.log('Fallo en el registro del Service Worker:', error);
            });
    });
}

// ==========================================
// LÓGICA DE INSTALACIÓN PWA
// ==========================================
let eventoInstalacion;
const botonInstalar = document.getElementById('btn-instalar-pwa');

// 1. El navegador detecta que es una PWA y prepara la instalación
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenimos que el navegador muestre su propio cartel molesto
    e.preventDefault();
    // Guardamos el evento para dispararlo cuando el usuario haga clic
    eventoInstalacion = e;
});

// 2. Al darle clic a tu botón personalizado
if (botonInstalar) {
    botonInstalar.addEventListener('click', async () => {
        if (eventoInstalacion) {
            // Mostramos el cartel nativo de instalación del sistema operativo
            eventoInstalacion.prompt();
            
            // Esperamos a ver qué elige el usuario (Instalar o Cancelar)
            const { outcome } = await eventoInstalacion.userChoice;
            if (outcome === 'accepted') {
                console.log('El usuario aceptó instalar PyME-Sync');
            } else {
                console.log('El usuario canceló la instalación');
            }
            
            // Limpiamos el evento porque solo se puede usar una vez
            eventoInstalacion = null;
        } else {
            // Si el evento no existe (ya está instalada o el navegador no lo soporta)
            alert("La aplicación ya está instalada o tu navegador requiere que uses la opción de 'Agregar a Inicio' desde el menú.");
        }
    });
}