import type { AppLocale, Variables } from './config';
import { messages as en } from './en';
import { messages as es } from './es';
import { messages as fr } from './fr';
import { messages as nl } from './nl';

export * from './config';

const additions: Record<AppLocale, Record<string, string>> = {
  en: {
    'error.notFound': 'This page does not exist.',
    'error.home': 'Back to home',
    'error.title': 'Something went wrong',
    'error.text': 'An unexpected error occurred. Please try again.',
    'operator.createError': 'Could not create the inspection.',
    'operator.loadingAria': 'Loading inspections',
    'operator.openLink': 'Open link',
    'inspection.conditionLegend': 'Condition',
    'inspection.photoLimit': 'You can add up to 8 photos.',
    'inspection.cameraPermissionDenied':
      'Camera access was blocked. Check your browser permission and try again.',
    'inspection.cameraNotFound':
      'No camera was found on this device. You can use the demo camera capture below.',
    'inspection.cameraBusy': 'The camera is busy in another app. Close it and try again.',
    'inspection.cameraUnsupported': 'Camera capture is not available in this browser or context.',
    'inspection.cameraRequestFailed':
      'The camera could not be opened. Try again or use the demo camera capture below.',
    'inspection.cameraPreviewFailed': 'The camera preview could not be prepared. Try again.',
    'inspection.cameraNotReady': 'The camera preview is not ready yet. Try opening it again.',
    'inspection.cameraPhotoFailed': 'This device could not prepare a camera photo. Try again.',
    'inspection.photoTooLarge':
      'This photo is too large for the inspection record. Try a closer frame.',
    'inspection.demoCanvasTitle': 'DEMO CAMERA CAPTURE',
    'inspection.demoCanvasCaption': 'Room 4B · sample evidence frame',
    'inspection.livePreviewAria': 'Live rear-facing camera preview',
    'inspection.photoPreviewAlt': 'Preview of the camera photo',
    'inspection.demoPhotoAlt': 'Demo camera capture',
    'inspection.capturedPhotoAlt': 'Captured camera photo',
    'inspection.validation.condition': 'Choose a condition for every area before continuing.',
    'inspection.validation.pendingPhoto': 'Use this photo or retake it before continuing.',
    'inspection.validation.photo':
      'Add at least one camera photo so the record has visual evidence.',
    'inspection.validation.notes': 'Keep your notes under 1,200 characters.',
    'inspection.validation.signature': 'Draw your signature and confirm the consent checkbox.',
    'inspection.submitError': 'Could not submit this inspection. Please try again.',
    'inspection.area.entryway': 'Entryway & keys',
    'inspection.area.living-room': 'Living room',
    'inspection.area.kitchen': 'Kitchen',
    'inspection.area.bathroom': 'Bathroom',
    'inspection.area.bedroom': 'Bedroom',
  },
  es: {
    'error.notFound': 'Esta página no existe.',
    'error.home': 'Volver al inicio',
    'error.title': 'Algo ha salido mal',
    'error.text': 'Se produjo un error inesperado. Inténtalo de nuevo.',
    'operator.createError': 'No se pudo crear la inspección.',
    'operator.loadingAria': 'Cargando inspecciones',
    'operator.openLink': 'Abrir enlace',
    'inspection.conditionLegend': 'Estado',
    'inspection.photoLimit': 'Puedes añadir hasta 8 fotos.',
    'inspection.cameraPermissionDenied':
      'El acceso a la cámara está bloqueado. Revisa los permisos del navegador e inténtalo de nuevo.',
    'inspection.cameraNotFound':
      'No se encontró ninguna cámara en este dispositivo. Puedes usar la captura de demostración.',
    'inspection.cameraBusy':
      'Otra aplicación está usando la cámara. Ciérrala e inténtalo de nuevo.',
    'inspection.cameraUnsupported':
      'La captura con cámara no está disponible en este navegador o contexto.',
    'inspection.cameraRequestFailed':
      'No se pudo abrir la cámara. Inténtalo de nuevo o usa la captura de demostración.',
    'inspection.cameraPreviewFailed':
      'No se pudo preparar la vista previa de la cámara. Inténtalo de nuevo.',
    'inspection.cameraNotReady':
      'La vista previa aún no está lista. Intenta abrir la cámara de nuevo.',
    'inspection.cameraPhotoFailed':
      'Este dispositivo no pudo preparar la foto. Inténtalo de nuevo.',
    'inspection.photoTooLarge':
      'La foto es demasiado grande para el registro. Prueba con un encuadre más cercano.',
    'inspection.demoCanvasTitle': 'CAPTURA DE CÁMARA DEMO',
    'inspection.demoCanvasCaption': 'Habitación 4B · ejemplo de evidencia',
    'inspection.livePreviewAria': 'Vista en directo de la cámara trasera',
    'inspection.photoPreviewAlt': 'Vista previa de la foto de la cámara',
    'inspection.demoPhotoAlt': 'Captura de cámara de demostración',
    'inspection.capturedPhotoAlt': 'Foto capturada con la cámara',
    'inspection.validation.condition': 'Elige un estado para cada zona antes de continuar.',
    'inspection.validation.pendingPhoto': 'Usa esta foto o repítela antes de continuar.',
    'inspection.validation.photo': 'Añade al menos una foto como evidencia visual.',
    'inspection.validation.notes': 'Limita las notas a 1.200 caracteres.',
    'inspection.validation.signature': 'Dibuja tu firma y confirma el consentimiento.',
    'inspection.submitError': 'No se pudo enviar la inspección. Inténtalo de nuevo.',
    'inspection.area.entryway': 'Entrada y llaves',
    'inspection.area.living-room': 'Salón',
    'inspection.area.kitchen': 'Cocina',
    'inspection.area.bathroom': 'Baño',
    'inspection.area.bedroom': 'Dormitorio',
  },
  fr: {
    'error.notFound': 'Cette page n’existe pas.',
    'error.home': 'Retour à l’accueil',
    'error.title': 'Un problème est survenu',
    'error.text': 'Une erreur inattendue s’est produite. Réessayez.',
    'operator.createError': 'Impossible de créer l’inspection.',
    'operator.loadingAria': 'Chargement des inspections',
    'operator.openLink': 'Ouvrir le lien',
    'inspection.conditionLegend': 'État',
    'inspection.photoLimit': 'Vous pouvez ajouter jusqu’à 8 photos.',
    'inspection.cameraPermissionDenied':
      'L’accès à la caméra est bloqué. Vérifiez les autorisations du navigateur et réessayez.',
    'inspection.cameraNotFound':
      'Aucune caméra n’a été détectée. Vous pouvez utiliser la capture de démonstration.',
    'inspection.cameraBusy':
      'La caméra est utilisée par une autre application. Fermez-la et réessayez.',
    'inspection.cameraUnsupported':
      'La capture photo n’est pas disponible dans ce navigateur ou ce contexte.',
    'inspection.cameraRequestFailed':
      'Impossible d’ouvrir la caméra. Réessayez ou utilisez la capture de démonstration.',
    'inspection.cameraPreviewFailed': 'Impossible de préparer l’aperçu. Réessayez.',
    'inspection.cameraNotReady': 'L’aperçu n’est pas encore prêt. Rouvrez la caméra.',
    'inspection.cameraPhotoFailed': 'Cet appareil n’a pas pu préparer la photo. Réessayez.',
    'inspection.photoTooLarge':
      'Cette photo est trop volumineuse pour le dossier. Essayez un cadrage plus rapproché.',
    'inspection.demoCanvasTitle': 'CAPTURE PHOTO DE DÉMONSTRATION',
    'inspection.demoCanvasCaption': 'Chambre 4B · exemple de preuve',
    'inspection.livePreviewAria': 'Aperçu en direct de la caméra arrière',
    'inspection.photoPreviewAlt': 'Aperçu de la photo prise',
    'inspection.demoPhotoAlt': 'Capture photo de démonstration',
    'inspection.capturedPhotoAlt': 'Photo prise avec la caméra',
    'inspection.validation.condition': 'Choisissez un état pour chaque zone avant de continuer.',
    'inspection.validation.pendingPhoto': 'Utilisez cette photo ou reprenez-la avant de continuer.',
    'inspection.validation.photo': 'Ajoutez au moins une photo comme preuve visuelle.',
    'inspection.validation.notes': 'Limitez vos notes à 1 200 caractères.',
    'inspection.validation.signature': 'Signez et confirmez le consentement.',
    'inspection.submitError': 'Impossible d’envoyer l’inspection. Réessayez.',
    'inspection.area.entryway': 'Entrée et clés',
    'inspection.area.living-room': 'Séjour',
    'inspection.area.kitchen': 'Cuisine',
    'inspection.area.bathroom': 'Salle de bain',
    'inspection.area.bedroom': 'Chambre',
  },
  nl: {
    'error.notFound': 'Deze pagina bestaat niet.',
    'error.home': 'Terug naar home',
    'error.title': 'Er is iets misgegaan',
    'error.text': 'Er is een onverwachte fout opgetreden. Probeer opnieuw.',
    'operator.createError': 'De inspectie kon niet worden gemaakt.',
    'operator.loadingAria': 'Inspecties laden',
    'operator.openLink': 'Link openen',
    'inspection.conditionLegend': 'Conditie',
    'inspection.photoLimit': 'Je kunt maximaal 8 foto’s toevoegen.',
    'inspection.cameraPermissionDenied':
      'Cameratoegang is geblokkeerd. Controleer je browserrechten en probeer opnieuw.',
    'inspection.cameraNotFound':
      'Er is geen camera gevonden op dit apparaat. Je kunt de democamera gebruiken.',
    'inspection.cameraBusy':
      'De camera wordt door een andere app gebruikt. Sluit die app en probeer opnieuw.',
    'inspection.cameraUnsupported': 'Foto’s maken is niet beschikbaar in deze browser of context.',
    'inspection.cameraRequestFailed':
      'De camera kon niet worden geopend. Probeer opnieuw of gebruik de democamera.',
    'inspection.cameraPreviewFailed':
      'Het cameravoorbeeld kon niet worden voorbereid. Probeer opnieuw.',
    'inspection.cameraNotReady': 'Het cameravoorbeeld is nog niet klaar. Open de camera opnieuw.',
    'inspection.cameraPhotoFailed':
      'Dit apparaat kon de camerafoto niet voorbereiden. Probeer opnieuw.',
    'inspection.photoTooLarge':
      'Deze foto is te groot voor het inspectiedossier. Probeer een kleinere uitsnede.',
    'inspection.demoCanvasTitle': 'DEMO-CAMERAOPNAME',
    'inspection.demoCanvasCaption': 'Kamer 4B · voorbeeld van bewijs',
    'inspection.livePreviewAria': 'Livevoorbeeld van de camera aan de achterzijde',
    'inspection.photoPreviewAlt': 'Voorbeeld van de camerafoto',
    'inspection.demoPhotoAlt': 'Demo-cameraopname',
    'inspection.capturedPhotoAlt': 'Vastgelegde camerafoto',
    'inspection.validation.condition': 'Kies voor elk onderdeel een conditie voordat je doorgaat.',
    'inspection.validation.pendingPhoto':
      'Gebruik deze foto of maak hem opnieuw voordat je doorgaat.',
    'inspection.validation.photo': 'Voeg ten minste één foto toe als visueel bewijs.',
    'inspection.validation.notes': 'Houd je notities onder 1.200 tekens.',
    'inspection.validation.signature': 'Zet je handtekening en bevestig de toestemming.',
    'inspection.submitError': 'De inspectie kon niet worden verzonden. Probeer opnieuw.',
    'inspection.area.entryway': 'Entree en sleutels',
    'inspection.area.living-room': 'Woonkamer',
    'inspection.area.kitchen': 'Keuken',
    'inspection.area.bathroom': 'Badkamer',
    'inspection.area.bedroom': 'Slaapkamer',
  },
};

const catalogs: Record<AppLocale, Record<string, string>> = {
  en: { ...en, ...additions.en },
  es: { ...es, ...additions.es },
  fr: { ...fr, ...additions.fr },
  nl: { ...nl, ...additions.nl },
};

export function translate(locale: AppLocale, key: string, variables: Variables = {}): string {
  const template = catalogs[locale][key] ?? en[key] ?? key;
  return Object.entries(variables).reduce(
    (value, [name, replacement]) => value.replaceAll(`{${name}}`, String(replacement)),
    template,
  );
}
